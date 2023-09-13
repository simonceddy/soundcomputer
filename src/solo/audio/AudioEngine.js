/* eslint-disable class-methods-use-this */
import { midiToFreq } from '@tonaljs/midi';
import BasicOscillator from './BasicOscillator';
import ComplexOscillator from './ComplexOscillator';
import SignalPath from './SignalPath';
import { isValidNonNegativeNum } from '../util';
import LFO from './LFO';

/**
 * @typedef {object} adsr
 * @prop {number} attack Attack time in seconds. Defaults to 0.01
 * @prop {number} decay Decay time in seconds. Defaults to 0.1
 * @prop {number} sustain Sustain amount between 0 and 1. Defaults to 1
 * @prop {number} release Release time in seconds. Defaults to 1.0
 */

/**
 * @typedef {object} options Noteon and off modulation options
 * @prop {number} filter1ModAmt Multiplier for filter 1 modulation
 * @prop {adsr} filterEnv Decay time in seconds. Defaults to 0.1
 * @prop {number} filter2ModAmt Multiplier for filter 2 modulation
 * @prop {?adsr} filter1Env Optional filter1 env. Uses filterEnv if not set.
 * @prop {?adsr} filter2Env Optional filter2 env. Uses filterEnv if not set.
 */

const defaultFilter1Props = {
  type: 'lowpass',
  Q: 0.707,
  frequency: 20000,
};
const defaultFilter2Props = {
  type: 'highpass',
  Q: 0.707,
  frequency: 20,
};

/**
 * Basic AudioEngine.
 * Wrapper for Web Audio functions.
 */
export default class AudioEngine {
  /** @type {AudioContext} */
  context;

  /** @type {ComplexOscillator} */
  complexOscillator;

  /** @type {BasicOscillator} */
  basicOscillator;

  /** @type {GainNode} */
  oscillatorGain;

  /** @type {BiquadFilterNode} */
  filter1;

  /** @type {BiquadFilterNode} */
  filter2;

  /** @type {SignalPath} */
  signalPath;

  #baseHz1;

  #baseHz2;

  /** @type {LFO} */
  lfo1;

  /** @type {LFO} */
  lfo2;

  /**
   * Creates the audio engine instance
   * @param {AudioContext} context
   */
  constructor(context) {
    this.context = context;
    this.signalPath = new SignalPath(context);
    this.complexOscillator = new ComplexOscillator(context);
    this.basicOscillator = new BasicOscillator(context);

    // Start with 0 gain - oscillator gain should be adjusted on noteOn and noteOff
    this.oscillatorGain = new GainNode(context, { gain: 0 });

    this.complexOscillator.connect(this.oscillatorGain);
    this.basicOscillator.connect(this.oscillatorGain);

    this.complexOscillator.start();
    this.basicOscillator.start();

    this.lfo1 = new LFO(context);
    this.lfo2 = new LFO(context);

    this.filter1 = new BiquadFilterNode(context, defaultFilter1Props);

    this.filter2 = new BiquadFilterNode(context, defaultFilter2Props);
    this.signalPath.outputGain.gain.setValueAtTime(0.2, context.currentTime);

    this.signalPath.plugIn(this.oscillatorGain);
    this.signalPath.connect(context.destination);
    this.signalPath.insert(this.filter1);
    this.signalPath.insert(this.filter2);
  }

  get sampleRate() {
    return this.context.sampleRate;
  }

  get input() {
    return this.signalPath.inputGain;
  }

  get output() {
    return this.signalPath.output;
  }

  get currentTime() {
    return this.context.currentTime;
  }

  setFilter1Hz(hz) {
    this.#baseHz1 = hz;
    this.filter1.frequency.linearRampToValueAtTime(hz, this.currentTime + 0.01);
  }

  setFilter2Hz(hz) {
    this.#baseHz2 = hz;
    this.filter2.frequency.linearRampToValueAtTime(hz, this.currentTime + 0.01);
  }

  /**
   * Internal helper for updating the oscillator frequencies
   * @param {number} hz the new frequency in hertz
   */
  #setFrequencies(hz) {
    if (hz < 0) throw new Error('Frequency cannot be negative!');

    this.complexOscillator.frequency = hz;
    this.basicOscillator.frequency = hz;
  }

  /**
   * Connect the engine to a destination.
   *
   * If no destination is provided it will attempt to connect to the AudioContext.destination.
   * @param {?AudioNode} node An optional destination node
   */
  connect(node = null) {
    if (!node && !this.context.destination) {
      throw new Error('No destination is available!');
    }
    this.signalPath.connect(node || this.context.destination);
  }

  /**
   * Internal helper for modulation filter1
   * @param {number} amount Modulation multiplier
   * @param {adsr} adsr Modulation source envelope
   */
  #filter1NoteOnMod(amount = 1, adsr = {}) {
    const attack = isValidNonNegativeNum(adsr.attack) ? adsr.attack : 0.01;
    const decay = isValidNonNegativeNum(adsr.decay) ? adsr.decay : 0.1;
    const sustain = isValidNonNegativeNum(adsr.sustain) ? adsr.sustain : 1;

    if (!this.#baseHz1) this.#baseHz1 = this.filter1.frequency.value;

    const aHz = this.#baseHz1 + (5000 * amount);
    const sHz = ((aHz - this.#baseHz1) * sustain) + this.#baseHz1;
    // console.log(amount, adsr, this.#baseHz1, aHz, sHz);

    this.filter1.frequency.cancelScheduledValues(this.currentTime + 0.005);
    this.filter1.frequency.linearRampToValueAtTime(this.#baseHz1, this.currentTime + 0.005);
    this.filter1.frequency.linearRampToValueAtTime(aHz, this.currentTime + attack + 0.005);
    this.filter1.frequency.linearRampToValueAtTime(sHz, this.currentTime + attack + decay + 0.005);
  }

  #filter1NoteOffMod(release = 1.0) {
    this.filter1.frequency.cancelScheduledValues(this.currentTime + 0.005);
    this.filter1.frequency.linearRampToValueAtTime(this.#baseHz1, this.currentTime + release);
  }

  /**
   * Internal helper for modulation filter2
   * @param {number} amount Modulation multiplier
   * @param {adsr} adsr Modulation source envelope
   */
  #filter2NoteOnMod(amount = 1, adsr = {}) {
    const attack = isValidNonNegativeNum(adsr.attack) ? adsr.attack : 0.01;
    const decay = isValidNonNegativeNum(adsr.decay) ? adsr.decay : 0.1;
    const sustain = isValidNonNegativeNum(adsr.sustain) ? adsr.sustain : 1;

    if (!this.#baseHz2) this.#baseHz2 = this.filter2.frequency.value;

    const aHz = this.#baseHz2 + (5000 * amount);
    const sHz = ((aHz - this.#baseHz2) * sustain) + this.#baseHz2;
    // console.log(amount, adsr, this.#baseHz2, aHz, sHz);

    this.filter2.frequency.cancelScheduledValues(this.currentTime + 0.005);
    this.filter2.frequency.linearRampToValueAtTime(this.#baseHz2, this.currentTime + 0.005);
    this.filter2.frequency.linearRampToValueAtTime(aHz, this.currentTime + attack + 0.005);
    this.filter2.frequency.linearRampToValueAtTime(sHz, this.currentTime + attack + decay + 0.005);
  }

  #filter2NoteOffMod(release = 1.0) {
    this.filter2.frequency.cancelScheduledValues(this.currentTime + 0.005);
    this.filter2.frequency.linearRampToValueAtTime(this.#baseHz2, this.currentTime + release);
  }

  /**
   * Trigger noteon
   * @param {number} note a valid midi note (0-127)
   * @param {adsr} adsr an adsr envelope object
   * @param {options} options additional options
   */
  noteOn(note = 48, adsr = {}, options = {}) {
    if (note < 0 || note > 127) {
      throw new Error(`Out of range midi note: ${note}. Notes must be between 0 and 127`);
    }

    if (!this.context?.currentTime) {
      throw new Error('Could not resolve current time!');
    }

    const hz = midiToFreq(note);
    this.#setFrequencies(hz);

    const attack = isValidNonNegativeNum(adsr.attack) ? adsr.attack : 0.01;
    const decay = isValidNonNegativeNum(adsr.decay) ? adsr.decay : 0.1;
    const sustain = isValidNonNegativeNum(adsr.sustain) ? adsr.sustain : 1;

    const { currentTime } = this.context;

    this.oscillatorGain.gain.cancelScheduledValues(currentTime + 0.005);
    this.oscillatorGain.gain.setValueAtTime(0, currentTime + 0.005);
    this.oscillatorGain.gain.linearRampToValueAtTime(1, currentTime + attack + 0.005);
    this.oscillatorGain.gain.linearRampToValueAtTime(
      sustain,
      currentTime + attack + decay + 0.005
    );

    if (options.filter1ModAmt
      && options.filter1ModAmt !== 0
      && (options.filterEnv || options.filter1Env)
    ) {
      this.#filter1NoteOnMod(options.filter1ModAmt, options.filter1Env || options.filterEnv);
    }
    if (options.filter2ModAmt
      && options.filter2ModAmt !== 0
      && (options.filterEnv || options.filter2Env)
    ) {
      this.#filter2NoteOnMod(options.filter2ModAmt, options.filter2Env || options.filterEnv);
    }

    // console.log('here', note, hz);
  }

  /**
   * Trigger noteoff
   * @param {number} release The release time in seconds. Default is 1.0 seconds.
   * @param {options} options Modulation options
   */
  noteOff(release = 1.0, options = {}) {
    if (!isValidNonNegativeNum(release)) {
      throw new Error('Release must be a number 0 or higher!');
    }
    this.oscillatorGain.gain.cancelScheduledValues(this.context.currentTime + 0.005);
    this.oscillatorGain.gain.linearRampToValueAtTime(0, this.context.currentTime + 0.005 + release);
    // console.log('and here', release);
    if (options.filter1ModAmt
      && options.filter1ModAmt !== 0
      && (options.filterEnv || options.filter1Env)
    ) {
      this.#filter1NoteOffMod(options.filter1Env?.release || options.filterEnv?.release || release);
    }
    if (options.filter2ModAmt
      && options.filter2ModAmt !== 0
      && (options.filterEnv || options.filter2Env)
    ) {
      this.#filter2NoteOffMod(options.filter2Env?.release || options.filterEnv?.release || release);
    }
  }

  /**
   * Stop the audio engine and perform garbage collection
   */
  stop() {
    this.basicOscillator.stop();
    this.complexOscillator.stop();
    this.signalPath.disconnect();
    this.context.close();
  }
}

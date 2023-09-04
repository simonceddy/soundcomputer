/* eslint-disable class-methods-use-this */
import { midiToFreq } from '@tonaljs/midi';
import BasicOscillator from './BasicOscillator';
import ComplexOscillator from './ComplexOscillator';
import SignalPath from './SignalPath';
import { isValidNonNegativeNum } from '../util';

/**
 * @typedef {object} adsr
 * @prop {number} attack Attack time in seconds. Defaults to 0.01
 * @prop {number} decay Decay time in seconds. Defaults to 0.1
 * @prop {number} sustain Sustain amount between 0 and 1. Defaults to 1
 * @prop {number} release Release time in seconds. Defaults to 1.0
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
   * Trigger noteon
   * @param {number} note a valid midi note (0-127)
   * @param {adsr} adsr an adsr envelope object
   */
  noteOn(note = 48, adsr = {}) {
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

    this.oscillatorGain.gain.cancelScheduledValues(currentTime);
    this.oscillatorGain.gain.setValueAtTime(0, currentTime);
    this.oscillatorGain.gain.linearRampToValueAtTime(1, currentTime + attack);
    this.oscillatorGain.gain.linearRampToValueAtTime(
      sustain,
      currentTime + attack + decay
    );

    // console.log('here', note, hz);
  }

  /**
   * Trigger noteoff
   * @param {number} release The release time in seconds. Default is 1.0 seconds.
   */
  noteOff(release = 1.0) {
    if (!isValidNonNegativeNum(release)) {
      throw new Error('Release must be a number 0 or higher!');
    }
    this.oscillatorGain.gain.cancelScheduledValues(this.context.currentTime);
    this.oscillatorGain.gain.linearRampToValueAtTime(0, this.context.currentTime + release);
    // console.log('and here', release);
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

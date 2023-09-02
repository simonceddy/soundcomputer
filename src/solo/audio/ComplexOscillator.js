export default class ComplexOscillator {
  /** @type {AudioContext} */
  context;

  /** @type {OscillatorNode} */
  sine;

  /** @type {OscillatorNode} */
  triangle;

  /** @type {OscillatorNode} */
  square;

  /** @type {OscillatorNode} */
  sawtooth;

  /** @type {GainNode} */
  outputGain;

  /** @type {number} */
  #frequency = 440;

  /**
   *
   * @param {AudioContext} context
   */
  constructor(context) {
    this.context = context;
    this.sine = new OscillatorNode(context, { frequency: this.#frequency, type: 'sine' });
    this.triangle = new OscillatorNode(context, { frequency: this.#frequency, type: 'triangle' });
    this.sawtooth = new OscillatorNode(context, { frequency: this.#frequency, type: 'sawtooth' });
    this.square = new OscillatorNode(context, { frequency: this.#frequency, type: 'square' });

    this.outputGain = new GainNode(context, { gain: 0 });

    this.sine.connect(this.outputGain);
    this.triangle.connect(this.outputGain);
    this.sawtooth.connect(this.outputGain);
    this.square.connect(this.outputGain);
  }

  #updateFrequency() {
    this.sine.frequency.setValueAtTime(this.#frequency, this.context.currentTime);
    this.triangle.frequency.setValueAtTime(this.#frequency, this.context.currentTime);
    this.sawtooth.frequency.setValueAtTime(this.#frequency, this.context.currentTime);
    this.square.frequency.setValueAtTime(this.#frequency, this.context.currentTime);
  }

  #connectAll(node) {
    this.disconnect();

    this.sine.connect(this.outputGain);
    this.triangle.connect(this.outputGain);
    this.sawtooth.connect(this.outputGain);
    this.square.connect(this.outputGain);

    if (node) this.outputGain.connect(node);
  }

  #startAll(time = 0) {
    this.sine.start(this.context.currentTime + time);
    this.triangle.start(this.context.currentTime + time);
    this.sawtooth.start(this.context.currentTime + time);
    this.square.start(this.context.currentTime + time);
  }

  #stopAll(time = 0) {
    this.sine.stop(this.context.currentTime + time);
    this.triangle.stop(this.context.currentTime + time);
    this.sawtooth.stop(this.context.currentTime + time);
    this.square.stop(this.context.currentTime + time);
  }

  start(time) {
    this.#startAll(time);
  }

  stop(time) {
    this.#stopAll(time);
  }

  get output() {
    return this.outputGain;
  }

  get gain() {
    return this.outputGain.gain;
  }

  get frequency() {
    return this.#frequency;
  }

  set frequency(hz) {
    this.#frequency = hz;
    this.#updateFrequency();
  }

  connect(node) {
    this.#connectAll(node);
  }

  disconnect() {
    this.outputGain.disconnect();
  }
}

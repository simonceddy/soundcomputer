export default class BasicOscillator {
  /** @type {AudioContext} */
  context;

  /** @type {OscillatorNode} */
  node;

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
    this.node = new OscillatorNode(context, { frequency: this.#frequency, type: 'sine' });

    this.outputGain = new GainNode(context, { gain: 0 });

    this.node.connect(this.outputGain);
  }

  #updateFrequency() {
    this.node.frequency.setValueAtTime(this.#frequency, this.context.currentTime);
  }

  #connectAll(node) {
    this.disconnect();

    this.node.connect(this.outputGain);

    if (node) this.outputGain.connect(node);
  }

  #startAll(time = 0) {
    this.node.start(this.context.currentTime + time);
  }

  #stopAll(time = 0) {
    this.node.stop(this.context.currentTime + time);
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

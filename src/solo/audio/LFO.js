export default class LFO {
  /** @type {AudioContext} */
  context;

  /** @type {OscillatorNode} */
  oscillatorNode;

  /** @type {GainNode} */
  output;

  /**
   * @param {AudioContext} context
   */
  constructor(context) {
    this.context = context;

    this.oscillatorNode = new OscillatorNode(context, {
      frequency: 1,
      type: 'sine',
    });
    this.output = new GainNode(context, { gain: 1 });
    this.oscillatorNode.start();
    this.oscillatorNode.connect(this.output);
  }

  get type() {
    return this.oscillatorNode.type;
  }

  set type(val) {
    this.oscillatorNode.type = val;
  }

  get frequency() {
    return this.oscillatorNode.frequency;
  }

  set frequency(val) {
    this.oscillatorNode.frequency.setValueAtTime(val, this.context.currentTime);
  }

  get gain() {
    return this.output.gain;
  }

  set gain(val) {
    this.output.gain.setValueAtTime(val, this.context.currentTime);
  }

  connect(node) {
    this.oscillatorNode.connect(this.output);
    this.output.connect(node);
  }

  disconnect() {
    this.output.disconnect();
  }

  stop(when = null) {
    this.oscillatorNode.stop(when);
  }
}

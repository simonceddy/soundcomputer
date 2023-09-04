export default class SignalPath {
  /** @type {AudioContext} */
  context;

  /** @type {GainNode} */
  inputGain;

  /** @type {GainNode} */
  outputGain;

  /** @type {AudioNode[]} */
  inserts = [];

  /** @type {?AudioNode} */
  inputFrom;

  /** @type {?AudioNode} */
  outputTo;

  /**
   *
   * @param {AudioContext} context
   */
  constructor(context) {
    this.context = context;
    this.inputGain = context.createGain();
    this.outputGain = context.createGain();
  }

  #connectAll() {
    if (this.inputFrom) this.inputFrom.connect(this.inputGain);
    let last = this.inputGain;
    this.inserts.forEach((i) => {
      if (last.connect) last.connect(i);
      if (i.connect) last = i;
    });

    if (last.connect) last.connect(this.outputGain);
    if (this.outputTo) this.outputGain.connect(this.outputTo);
  }

  #disconnectAll() {
    this.inputGain.disconnect();
    this.inserts.forEach((i) => {
      if (i.disconnect) i.disconnect();
    });
    this.outputGain.disconnect();
  }

  #updatePath(callback) {
    this.#disconnectAll();
    if (callback) callback();
    this.#connectAll();
  }

  insert(node, key = -1) {
    this.#updatePath(() => {
      if (key === 0) this.inserts.unshift(node);
      else if (key >= this.inserts.length || key < 0) this.inserts.push(node);
      else this.inserts.splice(key, 0, node);
    });
  }

  plugIn(node) {
    this.#updatePath(() => {
      this.inputFrom = node;
    });
  }

  connect(node) {
    this.#updatePath(() => {
      this.outputTo = node;
    });
  }

  disconnect() {
    this.inputGain.disconnect();
    this.#disconnectAll();
    this.outputGain.disconnect();
  }

  get output() {
    return this.outputGain;
  }

  get input() {
    return this.inputGain;
  }
}

export default class SignalPath {
  /** @type {GainNode} */
  input;

  /** @type {GainNode} */
  output;

  /** @type {(AudioNode|import("tunajs").TunaAudioNode)[]} */
  nodes = [];

  /**
   *
   * @param {AudioContext} context
   */
  constructor(context, nodes = []) {
    this.input = context.createGain();
    this.output = context.createGain();
    if (nodes.length > 0) this.nodes.push(...nodes);
  }

  #connectAll() {
    let last = this.input;
    this.nodes.forEach((n) => {
      if (last.connect) last.connect(n);
      if (n.connect) last = n;
    });
    if (last.connect) last.connect(this.output);
  }

  #disconnectAll() {
    this.nodes.forEach((n) => {
      if (n.disconnect) n.disconnect();
    });
  }

  unshift(node) {
    this.nodes.unshift(node);
  }

  push(node) {
    this.nodes.push(node);
  }

  insert(node, index = 0) {
    if (index <= 0) return this.unshift(node);
    if (index >= this.nodes.length) return this.push(node);

    this.nodes.splice(index, 0, node);
    return null;
  }

  remove(node) {
    this.nodes = this.nodes.filter((n) => n !== node);
  }

  connect(destinationNode, disconnect = false) {
    if (disconnect) this.output.disconnect();
    this.#disconnectAll();
    this.output.connect(destinationNode);
    this.#connectAll();
  }

  plugIn(sourceNode, disconnect = false) {
    if (disconnect) this.input.disconnect();
    this.#disconnectAll();
    sourceNode.connect(this.input);
    this.#connectAll();
  }
}

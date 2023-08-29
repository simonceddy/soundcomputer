/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
// FuzzWorklet.js
class FuzzWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.port.onmessage = (event) => {
      if (event.data.type === 'parameters') {
        const { gain, tone, sustain } = event.data;
        this.setParameters(gain, tone, sustain);
      }
    };

    // Instantiate the WebAssembly module
    this.fuzzInstance = new wasmInstance.exports.fuzz();
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];

    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      const inputChannel = inputs[0][channel];

      for (let i = 0; i < outputChannel.length; ++i) {
        outputChannel[i] = this.fuzzInstance.process(inputChannel[i]);
      }
    }

    return true;
  }

  setParameters(gain, tone, sustain) {
    this.fuzzInstance.setParameters(gain, tone, sustain);
  }
}

registerProcessor('fuzz-processor', FuzzWorkletProcessor);

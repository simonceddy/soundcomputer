/* eslint-disable no-plusplus */
// OscillatorWorklet.js
class OscillatorProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'frequency',
        defaultValue: 440,
        minValue: 20,
        maxValue: 20000,
        automationRate: 'a-rate',
      },
    ];
  }

  constructor() {
    super();
    this.phase = 0;
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    const { frequency } = parameters;
    const { sampleRate } = this.context;

    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        const t = this.phase / sampleRate;
        outputChannel[i] = Math.sin(2 * Math.PI * frequency[i] * t);
        this.phase += 1;
      }
    }

    return true;
  }
}

registerProcessor('oscillator-processor', OscillatorProcessor);

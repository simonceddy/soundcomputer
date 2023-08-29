/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
// triangle-oscillator-worklet.js

class TriangleOscillatorWorklet extends AudioWorkletProcessor {
  constructor(opts) {
    console.log(opts);
    super(opts);
    this.sampleRate = opts.processorOptions.sampleRate || 44100;
    this.phase = 0;
    this.frequency = 440; // Default frequency of 440 Hz
  }

  static get parameterDescriptors() {
    return [
      { name: 'frequency', defaultValue: 440 }
    ];
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    // console.log(parameters);
    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        const sample = this.getNextSample();
        outputChannel[i] = sample;
      }
    }

    return true;
  }

  getNextSample() {
    const currentSample = this.phase < 0.5 ? 4 * this.phase - 1 : 3 - 4 * this.phase;
    const increment = this.frequency / this.sampleRate;
    this.phase = (this.phase + increment) % 1;
    return currentSample;
  }
}

registerProcessor('triangle-oscillator', TriangleOscillatorWorklet);

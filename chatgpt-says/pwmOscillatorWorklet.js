/* eslint-disable no-plusplus */
// PWMOscillatorWorklet.js
class PWMOscillatorProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'frequency',
        defaultValue: 440,
        minValue: 20,
        maxValue: 20000,
        automationRate: 'a-rate',
      },
      {
        name: 'dutyCycle',
        defaultValue: 0.5,
        minValue: 0,
        maxValue: 1,
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
    const { dutyCycle } = parameters;
    const { sampleRate } = this.context;

    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        const t = this.phase / sampleRate;
        const value = t % (1 / frequency[i]) < dutyCycle[i] / frequency[i] ? 1 : -1;
        outputChannel[i] = value;
        this.phase += 1;
      }
    }

    return true;
  }
}

registerProcessor('pwm-oscillator-processor', PWMOscillatorProcessor);

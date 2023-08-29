/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
// MixerChannelWorklet.js
class MixerChannelProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'volume',
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: 'a-rate',
      },
      {
        name: 'pan',
        defaultValue: 0,
        minValue: -1,
        maxValue: 1,
        automationRate: 'a-rate',
      },
    ];
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];

    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];

      for (let i = 0; i < outputChannel.length; ++i) {
        // Combine and adjust audio from multiple inputs
        let mixedSample = 0;

        for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
          mixedSample += inputs[inputIndex][channel][i];
        }

        // Apply volume and panning
        mixedSample *= parameters.volume[i];
        const leftGain = Math.sqrt(0.5 - parameters.pan[i] * 0.5);
        const rightGain = Math.sqrt(0.5 + parameters.pan[i] * 0.5);
        outputChannel[i] = [
          mixedSample * leftGain,
          mixedSample * rightGain,
        ];
      }
    }

    return true;
  }
}

registerProcessor('mixer-channel-processor', MixerChannelProcessor);

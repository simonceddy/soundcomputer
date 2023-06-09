/* eslint-disable class-methods-use-this */
class RandomNoiseProcessor extends AudioWorkletProcessor {
  process(_inputs, outputs) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i += 1) {
        channel[i] = Math.random() * 2 - 1;
      }
    });
    return true;
  }
}

registerProcessor('randomNoise', RandomNoiseProcessor);

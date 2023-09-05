/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
// clock-worker.js
class ClockWorker extends AudioWorkletProcessor {
  constructor(opts) {
    super(opts);
    this.clockInterval = 24; // 24 PPQ
    this.bpm = opts.processorOptions?.bpm || 120;
    this.sampleRate = opts.processorOptions?.sampleRate || 44100;
    this.updateIntervals();
    this.port.onmessage = (event) => this.handleMessage(event);
  }

  updateIntervals() {
    this.tickInterval = this.sampleRate * ((60 / this.bpm) / this.clockInterval);
    this.ticksRemaining = this.tickInterval;
  }

  handleMessage(event) {
    if (event.data === 'start') {
      console.log(this.tickInterval);
      this.ticksRemaining = this.tickInterval;
    } else if (event.data.bpm) {
      this.bpm = event.data.bpm;
      this.updateIntervals();
    }
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];

    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        // console.log('here');
        // Check if it's time for a new tick
        if (this.ticksRemaining <= 0) {
          // Send a clock tick message to the main thread
          this.port.postMessage({ type: 'tick' });

          // Calculate the remaining ticks until the next tick
          this.ticksRemaining += this.tickInterval;
        }

        this.ticksRemaining--;
      }
    }

    return true;
  }
}

registerProcessor('clock-worker', ClockWorker);

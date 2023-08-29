/* eslint-disable no-unused-vars */
class SchedulingWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.nextEventTime = 0;
    this.bpm = 120; // Tempo in beats per minute
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    // Get the current audio time from the audio context
    const currentTime = this.currentFrame / this.sampleRate;

    // Calculate the time interval for a 16th note based on tempo
    const beatsPerSecond = this.bpm / 60;
    const secondsPerBeat = 1 / beatsPerSecond;
    const secondsPer16thNote = secondsPerBeat / 4;

    // Process audio events
    while (this.nextEventTime < currentTime + this.blockSize / this.sampleRate) {
      // Trigger an audio event by setting the output samples
      output[0].forEach((sample, channel) => {
        // Check if the current time matches the time of a 16th note
        if (Math.abs(this.nextEventTime - currentTime) < secondsPer16thNote / 2) {
          // Trigger the event (example: set the sample value to 0.5 for a moment)
          sample = 0.5;
        }
      });

      // Calculate the time of the next 16th note event
      this.nextEventTime += secondsPer16thNote;
    }

    return true;
  }
}

registerProcessor('scheduling-worklet', SchedulingWorkletProcessor);

/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class SchedulingProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.scheduledEvents = [];
    this.port.onmessage = (event) => this.handleMessage(event);
  }

  handleMessage(event) {
    const { currentTime, type, data } = event.data;
    // Handle different types of events (e.g., note-on, note-off)
    if (type === 'note-on') {
      console.log(data);
      // Perform actions for note-on events using the data
      // For example, trigger a note with the specified pitch and velocity.
    } else if (type === 'note-off') {
      // Perform actions for note-off events using the data
    }
  }

  process(inputs, outputs, parameters) {
    // Process audio if needed
    return true;
  }
}

registerProcessor('mScheduler', SchedulingProcessor);

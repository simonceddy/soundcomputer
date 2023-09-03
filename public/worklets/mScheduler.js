/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */

const EVENT_TYPES = {
  NOTE_ON: 'note-on',
  NOTE_OFF: 'note-off',
};

self.onmessage = function (e) {
  const { currentTime, scheduledEvents } = e.data;

  while (scheduledEvents.length > 0) {
    const event = scheduledEvents[0];
    if (event.time <= currentTime) {
      scheduledEvents.shift();
      postMessage(event); // Send the event back to the main thread for execution
    } else {
      break;
    }
  }

  // Request the main thread to send the current time again for the next loop
  postMessage({ requestTime: true });
};

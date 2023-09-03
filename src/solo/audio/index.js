/* eslint-disable func-names */
import BasicOscillator from './BasicOscillator';
import ComplexOscillator from './ComplexOscillator';
import SignalPath from './SignalPath';

export { default as SignalPath } from './SignalPath';

export const audioContext = new AudioContext();

const worker = new Worker('worklets/mScheduler.js');
console.log(worker);

let { currentTime } = audioContext;
const scheduledEvents = [];

// Handle events sent by the worker
worker.onmessage = function (e) {
  const { data } = e;

  if (data.requestTime) {
    // Request the current time from the audio context
    currentTime = audioContext.currentTime;
    // Send the current time to the worker for the next loop
    worker.postMessage({ currentTime, scheduledEvents });
  } else {
    // Execute the scheduled event received from the worker
    data.callback();
  }
};

export function scheduleEvent(time, eventType, eventData) {
  const event = { time, type: eventType, data: eventData };
  // Send the event to the worker
  worker.postMessage(event);
}

const cOsc = new ComplexOscillator(audioContext);
const bOsc = new BasicOscillator(audioContext);
const main = new SignalPath(audioContext);

const filter1 = new BiquadFilterNode(audioContext, {
  type: 'bandpass',
  Q: 1.707,
  frequency: 1500,
});

const filter2 = new BiquadFilterNode(audioContext, {
  type: 'lowpass',
  Q: 1.707,
  frequency: 1500,
});

cOsc.frequency = 120;
bOsc.frequency = 120;

cOsc.gain.setValueAtTime(0.6, audioContext.currentTime);
bOsc.gain.setValueAtTime(0.6, audioContext.currentTime);

const osc = new GainNode(audioContext, { gain: 0 });

cOsc.connect(osc);
bOsc.connect(osc);

main.insert(filter1);
main.insert(filter2, 0);
main.plugIn(osc);
main.connect(audioContext.destination);
export async function init() {
  if (audioContext.state === 'suspended') audioContext.resume();
}
cOsc.start();
bOsc.start();

const attack = 0.01;
const release = 0.5;

export function playAudio(hz = 100) {
  cOsc.frequency = hz || 100;
  bOsc.frequency = hz || 100;
  osc.gain.cancelScheduledValues(audioContext.currentTime);
  osc.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.01);
  osc.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + attack);
  osc.gain.linearRampToValueAtTime(0, audioContext.currentTime + attack + release);

  filter1.frequency.cancelScheduledValues(audioContext.currentTime);
  filter1.frequency.linearRampToValueAtTime(20, audioContext.currentTime + 0.01);
  filter1.frequency.linearRampToValueAtTime(1200, audioContext.currentTime + attack);
  filter1.frequency.linearRampToValueAtTime(20, audioContext.currentTime + attack + release);
}
console.log(main);

export function startKey(hz) {
  cOsc.frequency = hz || 100;
  bOsc.frequency = hz || 100;
  osc.gain.cancelScheduledValues(audioContext.currentTime);
  osc.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.01);
  osc.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + attack);
  filter1.frequency.cancelScheduledValues(audioContext.currentTime);
  filter1.frequency.linearRampToValueAtTime(20, audioContext.currentTime + 0.01);
  filter1.frequency.linearRampToValueAtTime(1200, audioContext.currentTime + attack);
}

export function stopKey() {
  osc.gain.linearRampToValueAtTime(0, audioContext.currentTime + attack + release);
  filter1.frequency.linearRampToValueAtTime(20, audioContext.currentTime + attack + release);
}

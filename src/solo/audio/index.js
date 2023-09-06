/* eslint-disable func-names */
import { createContext } from 'react';

export { default as SignalPath } from './SignalPath';
export { default as AudioEngine } from './AudioEngine';
export { default as BasicOscillator } from './BasicOscillator';
export { default as ComplexOscillator } from './ComplexOscillator';

export const audioContext = new AudioContext();

export async function init() {
  // Init workers
  if (audioContext.state === 'suspended') audioContext.resume();
}

/**
 * Sketchy clock worker singleton method
 * @returns {Promise<AudioWorkletNode>}
*/
export async function clockWorker() {
  await audioContext.audioWorklet.addModule('worklets/clock-worker.js');
  const clockNode = new AudioWorkletNode(audioContext, 'clock-worker', {
    processorOptions: {
      sampleRate: audioContext.sampleRate
    }
  });
  clockNode.connect(audioContext.destination);

  // Handle scheduling by sending messages to the AudioWorklet
  // clockNode.port.onmessage = (event) => {
  //   if (event.data.type === 'tick') {
  //     // Handle the clock tick here
  //     // console.log('tick');
  //     if (tickHandler) tickHandler();
  //   } else {
  //     // console.log('mystery', event.data);
  //   }
  // };
  // clockNode.port.postMessage('start');
  return clockNode;
}

// export function playAudio(hz = 100) {
//   cOsc.frequency = hz || 100;
//   bOsc.frequency = hz || 100;
//   osc.gain.cancelScheduledValues(audioContext.currentTime);
//   osc.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.01);
//   osc.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + attack);
//   osc.gain.linearRampToValueAtTime(0, audioContext.currentTime + attack + release);

//   filter1.frequency.cancelScheduledValues(audioContext.currentTime);
//   filter1.frequency.linearRampToValueAtTime(20, audioContext.currentTime + 0.01);
//   filter1.frequency.linearRampToValueAtTime(1200, audioContext.currentTime + attack);
//   filter1.frequency.linearRampToValueAtTime(20, audioContext.currentTime + attack + release);
// }
// console.log(main);

export const AudioEngineContext = createContext({});

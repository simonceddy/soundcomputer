/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { createContext } from 'react';

export { default as SignalPath } from './SignalPath';
export { default as AudioEngine } from './AudioEngine';
export { default as BasicOscillator } from './BasicOscillator';
export { default as ComplexOscillator } from './ComplexOscillator';
export { default as LFO } from './LFO';

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

export const AudioEngineContext = createContext({});

/**
 * @typedef {object} adsr
 * @prop {number} attack Attack time in seconds. Defaults to 0.01
 * @prop {number} decay Decay time in seconds. Defaults to 0.1
 * @prop {number} sustain Sustain amount between 0 and 1. Defaults to 1
 * @prop {number} release Release time in seconds. Defaults to 1.0
 */

/**
 * @typedef {object} StepData
 * @prop {adsr} envelope VCA Envelope
 * @prop {adsr} filterEnvelope Filter modulator envelope
 * @prop {number} hz Frequency to play
 * @prop {number} filter1Mod Modifier for filter 1 modulator, is bi-polar with range of -1 to 1.
 * Defaults to 0 (no modulation).
 * @prop {number} filter2Mod Modifier for filter 2 modulator, is bi-polar with range of -1 to 1.
 * Defaults to 0 (no modulation).
 */

/**
 * Handle a sequencer step
 * @param {import('./AudioEngine').default} engine
 * @param {StepData} data
 */
export function handleStep(engine, data = {}) {

}

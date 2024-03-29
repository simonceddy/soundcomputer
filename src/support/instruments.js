/* eslint-disable no-unused-vars */
import { midiToFreq } from '@tonaljs/midi';
import audioContext from './audioContext';
import * as waves from './wavetables';
import { defaultOscillatorSettings } from '../current/features/instruments/support';

let kickBuffer;
let hatBuffer;

(async () => {
  const kickres = await fetch('assets/green ghoul kick.mp3');
  const hatres = await fetch('assets/phaseplant shorthat2.mp3');
  // console.log(res);
  const kresBuffer = await kickres.arrayBuffer();
  const hresBuffer = await hatres.arrayBuffer();
  kickBuffer = await audioContext.decodeAudioData(kresBuffer);
  hatBuffer = await audioContext.decodeAudioData(hresBuffer);
})();

// console.log(Object.keys(waves));

export const instruments = [
  { key: 0, label: 'none' },
  { key: 1, label: 'sweep' },
  { key: 2, label: 'kick' },
  { key: 3, label: 'hat' },
];

export const sampleInstrument = {
  src: 'assets/green ghoul kick.mp3',
};

export const waveInstrument = {
  wave: ''
};

const wave = new PeriodicWave(audioContext, {
  real: waves.triangle.real,
  imag: waves.triangle.imag,
});
const attackTime = 0.01;
const releaseTime = 0.5;
const sweepLength = 0.6;

export function playSweep(time, hz = 380, settings = defaultOscillatorSettings) {
  let wf = null;
  if (settings.type === 'custom') {
    if (settings.wave && waves[settings.wave]) {
      wf = new PeriodicWave(audioContext, {
        real: waves[settings.wave].real,
        imag: waves[settings.wave].imag,
      });
    } else wf = wave;
  }
  const osc = new OscillatorNode(audioContext, {
    frequency: hz,
    type: settings.type || 'sine',
    periodicWave: wf || undefined,
  });

  const sweepEnv = new GainNode(audioContext);
  sweepEnv.gain.cancelScheduledValues(time);
  sweepEnv.gain.setValueAtTime(0, time);
  sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
  sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);

  osc.connect(sweepEnv).connect(audioContext.destination);
  osc.start(time);
  osc.stop(time + sweepLength);
}

function playSweepForStep(step, time, settings = {}) {
  // console.log(step);
  const hz = midiToFreq(step.note);
  playSweep(time, hz, settings);
}

export function playSample(audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer,
    playbackRate: 1,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}

export function playStep(step, time, type = 0, settings = {}) {
  if (Math.random() <= step.probability) {
    switch (type) {
      case 1:
        playSweepForStep(step, time, settings);
        break;
      case 2:
        // Play kick sample
        playSample(kickBuffer, time);
        break;
      case 3:
        // Play hat sample
        playSample(hatBuffer, time);
        break;
      case 0:
      default:
    }
  }
}

import { midiToFreq } from '@tonaljs/midi';
import audioContext from './audioContext';
import * as waves from './wavetables';

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
  real: waves.bass.real,
  imag: waves.bass.imag,
});
const attackTime = 0.01;
const releaseTime = 0.5;
const sweepLength = 0.6;

export function playSweep(time, hz = 380) {
  const osc = new OscillatorNode(audioContext, {
    frequency: hz,
    type: 'custom',
    periodicWave: wave,
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

function playSweepForStep(step, time) {
  const hz = midiToFreq(step.note);
  playSweep(time, hz);
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

export function playStep(step, time, type = 0) {
  if (Math.random() <= step.probability) {
    switch (type) {
      case 1:
        playSweepForStep(step, time);
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

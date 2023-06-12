import { midiToFreq } from '@tonaljs/midi';
import audioContext from './audioContext';
import * as waves from './wavetables';

console.log(Object.keys(waves));

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
const attackTime = 0.2;
const releaseTime = 0.2;
const sweepLength = 0.8;

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
  const hz = midiToFreq(step.value1);
  playSweep(time, hz);
}

export function playStep(step, time, type = 0) {
  if (Math.random() <= step.probability) {
    switch (type) {
      case 1:
        playSweepForStep(step, time);
        break;
      case 0:
      default:
    }
  }
}

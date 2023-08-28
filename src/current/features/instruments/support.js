import * as waves from '../../../support/wavetables';

export const INSTRUMENT_NONE = 0;
export const INSTRUMENT_OSC = 1;
export const INSTRUMENT_SAMPLER = 2;

export const oscillatorTypes = {
  sine: true,
  sawtooth: true,
  square: true,
  triangle: true,
  custom: true,
};

export const defaultOscillatorSettings = {
  type: 'sine',
  wave: undefined
};

export const defaultSettings = {
  0: {},
  1: { ...defaultOscillatorSettings }
};

export function makeOscillator(context, settings = defaultOscillatorSettings) {
  let wf = null;
  if (settings.type === 'custom' && !settings.periodicWave) {
    wf = new PeriodicWave(context, {
      real: waves[settings.wave || 'triangle'].real,
      imag: waves[settings.wave || 'triangle'].imag,
    });
  }
  return new OscillatorNode(context, {
    ...settings,
    periodicWave: settings.periodicWave || wf
  });
}

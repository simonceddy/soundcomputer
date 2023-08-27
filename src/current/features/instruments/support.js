export const INSTRUMENT_NONE = 0;
export const INSTRUMENT_OSC = 1;

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

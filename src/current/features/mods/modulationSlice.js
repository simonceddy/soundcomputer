import { createSlice } from '@reduxjs/toolkit';
import { initTracks } from '../app/support';

const defaultLfoObject = {
  wave: 'sine',
  rate: 1,
  sync: false,
};
const defaultEnvObject = {
  attack: 0,
  hold: 0,
  decay: 0,
  sustain: 0,
  release: 0,
};

function initState() {
  const trackMods = {};

  initTracks((_v, id) => {
    trackMods[id] = {
      lfo1: { ...defaultLfoObject },
      lfo2: { ...defaultLfoObject },
      ampEnv: {
        ...defaultEnvObject
      },
    };
  });

  return {
    trackMods
  };
}

export const modulationSlice = createSlice({
  name: 'modulation',
  initialState: initState,
  reducers: {

  },
});

// export const { } = modulationSlice.actions;

export default modulationSlice.reducer;

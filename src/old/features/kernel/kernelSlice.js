import { createSlice } from '@reduxjs/toolkit';
import { defaultConfig } from './config';

export const kernelSlice = createSlice({
  name: 'kernelSlice',
  initialState: () => ({
    displayMode: 0,
    padMode: 0,
    booted: false,
    loadingSong: false,
    playing: false,
    config: defaultConfig
  }),
  reducers: {
    setDisplayMode: (state, action) => {
      state.displayMode = Number(action.payload);
    },
    bootUp(state) {
      state.booted = true;
    },
    toggleLoadingSong(state) {
      state.loadingSong = !state.loadingSong;
      // console.log(state.loadingSong);
    },
    togglePlaying(state) {
      state.playing = !state.playing;
    },
    setConfigVal(state, action) {
      const { key, value } = action.payload;
      state.config[key] = value;
    },
    setAllConfig(state, action) {
      state.config = action.payload;
    }
  },
});

export const {
  setDisplayMode, bootUp, toggleLoadingSong, togglePlaying, setConfigVal, setAllConfig
} = kernelSlice.actions;

export default kernelSlice.reducer;

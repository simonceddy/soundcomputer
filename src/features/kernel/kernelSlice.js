import { createSlice } from '@reduxjs/toolkit';

export const kernelSlice = createSlice({
  name: 'kernelSlice',
  initialState: {
    displayMode: 0,
    padMode: 0,
    booted: false,
    loadingSong: false,
    playing: false,
  },
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
    }
  },
});

export const {
  setDisplayMode, bootUp, toggleLoadingSong, togglePlaying
} = kernelSlice.actions;

export default kernelSlice.reducer;

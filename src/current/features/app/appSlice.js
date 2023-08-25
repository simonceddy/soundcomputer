import { createSlice } from '@reduxjs/toolkit';
import { APP_MODE_SEQ } from './support';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    metronomeActive: false,
    playing: false,
    booted: false,
    bpm: 120,
    appMode: APP_MODE_SEQ,
  },
  reducers: {
    toggleMetronome(state) {
      state.metronomeActive = !state.metronomeActive;
    },
    togglePlaying(state) {
      state.playing = !state.playing;
    },
    setBooted(state) {
      state.booted = true;
    },
    setBpm(state, action) {
      state.bpm = action.payload;
    },
    setAppMode(state, action) {
      state.appMode = action.payload;
    }
  },
});

export const {
  toggleMetronome,
  togglePlaying,
  setBooted,
  setBpm,
  setAppMode,
} = appSlice.actions;

export default appSlice.reducer;

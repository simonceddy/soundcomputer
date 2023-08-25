import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    metronomeActive: false,
    playing: false,
  },
  reducers: {
    toggleMetronome(state) {
      state.metronomeActive = !state.metronomeActive;
    },
    togglePlaying(state) {
      state.playing = !state.playing;
    }
  },
});

export const {
  toggleMetronome,
  togglePlaying,
} = appSlice.actions;

export default appSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import song from '../features/song/songSlice';
import kernel from '../features/kernel/kernelSlice';
import sequencer from '../features/sequencer/sequencerSlice';
import display from '../features/display/displaySlice';

export const store = configureStore({
  reducer: {
    song,
    kernel,
    sequencer,
    display,
  },
});

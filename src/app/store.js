/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import song from '../features/song/songSlice';
import kernel from '../features/kernel/kernelSlice';
import sequencer from '../features/sequencer/sequencerSlice';
import display from '../features/display/displaySlice';

export const store = configureStore({
  reducer: {
    song,
    kernel,
    sequencer: undoable(sequencer),
    // sequencer,
    display,
  },
});

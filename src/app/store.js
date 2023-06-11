/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import undoable, { excludeAction, includeAction } from 'redux-undo';
import song from '../features/song/songSlice';
import kernel from '../features/kernel/kernelSlice';
import sequencer from '../features/sequencer/sequencerSlice';
import display from '../features/display/displaySlice';
import saveConfigListener from '../features/kernel/saveConfigListener';
import instruments from '../features/instrument/instrumentSlice';

export const store = configureStore({
  reducer: {
    song: undoable(song, {
      ignoreInitialState: true,
      filter: includeAction(['songSlice/setSongName'])
    }),
    kernel,
    instruments,
    sequencer: undoable(sequencer, {
      ignoreInitialState: true,
      filter: excludeAction([
        'sequencerSlice/setSelectedLane',
        'sequencerSlice/setSelectedStep',
        'sequencerSlice/advanceAllSteps',
        'sequencerSlice/setLaneCurrentStep',
      ])
    }),
    display,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(saveConfigListener.middleware)
});

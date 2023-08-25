import { configureStore } from '@reduxjs/toolkit';
import pads from '../features/pads/padsSlice';
import app from '../features/app/appSlice';
import tracks from '../features/tracks/tracksSlice';
import sequencer from '../features/sequencer/sequencerSlice';
import instruments from '../features/instruments/instrumentsSlice';

const store = configureStore({
  reducer: {
    pads,
    app,
    tracks,
    sequencer,
    instruments
  }
});

export default store;

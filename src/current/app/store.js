import { configureStore } from '@reduxjs/toolkit';
import pads from '../features/pads/padsSlice';
import app from '../features/app/appSlice';
import tracks from '../features/tracks/tracksSlice';

const store = configureStore({
  reducer: {
    pads,
    app,
    tracks,
  }
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import tracks from '../features/tracks/tracksSlice';

const store = configureStore({
  reducer: {
    tracks
  }
});

export default store;

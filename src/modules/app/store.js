import { configureStore } from '@reduxjs/toolkit';
import patch from './patchSlice';
import pam from '../alm/pampro/app/pamSlice';
import tracks from '../orthagonal/features/tracks/tracksSlice';

const store = configureStore({
  reducer: {
    patch,
    pam,
    tracks
  }
});

export default store;

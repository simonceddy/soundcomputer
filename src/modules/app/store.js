import { configureStore } from '@reduxjs/toolkit';
import patch from './patchSlice';
import pam from '../alm/pampro/app/pamSlice';
import tracks from '../orthagonal/features/tracks/tracksSlice';
import settings from './settingsSlice';

const store = configureStore({
  reducer: {
    settings,
    patch,
    pam,
    tracks
  }
});

export default store;

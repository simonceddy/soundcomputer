import { configureStore } from '@reduxjs/toolkit';
import filters from '../features/filters/filtersSlice';
import oscillators from '../features/oscillators/oscillatorsSlice';
import envelopes from '../features/envelopes/envelopesSlice';

const store = configureStore({
  reducer: {
    filters,
    oscillators,
    envelopes,
  }
});

export default store;

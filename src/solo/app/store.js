import { configureStore } from '@reduxjs/toolkit';
import filters from '../features/filters/filtersSlice';
import oscillators from '../features/oscillators/oscillatorsSlice';
import envelopes from '../features/envelopes/envelopesSlice';
import sequencer from '../features/sequencer/sequencerSlice';

const store = configureStore({
  reducer: {
    filters,
    oscillators,
    envelopes,
    sequencer,
  }
});

export default store;

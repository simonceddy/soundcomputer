import { configureStore } from '@reduxjs/toolkit';
import filters from '../features/filters/filtersSlice';
import oscillators from '../features/oscillators/oscillatorsSlice';
import envelopes from '../features/envelopes/envelopesSlice';
import sequencer from '../features/sequencer/sequencerSlice';
import lfos from '../features/lfos/lfosSlice';

const store = configureStore({
  reducer: {
    filters,
    oscillators,
    envelopes,
    sequencer,
    lfos,
  }
});

export default store;

import { createSlice } from '@reduxjs/toolkit';
import { initSequencer } from './support';

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState: initSequencer,
  reducers: {
    setSelectedStep(state, action) {
      state.selectedStep = action.payload;
    }
  },
});

export const { setSelectedStep } = sequencerSlice.actions;

export default sequencerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { initSequencer } from './support';

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState: initSequencer,
  reducers: {
    setSelectedStep(state, action) {
      state.selectedStep = action.payload;
    },
    toggleStep(state, action) {
      state.tracks[action.payload.track]
        .steps[action.payload.step].active = !state.tracks[action.payload.track]
          .steps[action.payload.step].active;
    }
  },
});

export const { setSelectedStep, toggleStep } = sequencerSlice.actions;

export default sequencerSlice.reducer;

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
    },
    setNextStep(state, action) {
      state.tracks[action.payload.track].currentStep = action.payload.step;
    },
    advanceAllSteps(state, action) {
      const keys = Object.keys(state.tracks);
      keys.forEach((k) => {
        state.tracks[k].currentStep = action.payload[k] !== undefined
          ? action.payload[k]
          : state.tracks[k].currentStep;
      });
    },
    resetAll(state) {
      const keys = Object.keys(state.tracks);
      keys.forEach((k) => {
        state.tracks[k].currentStep = state.tracks[k].start || 0;
      });
    }
  },
});

export const {
  setSelectedStep,
  toggleStep,
  setNextStep,
  advanceAllSteps,
  resetAll,
} = sequencerSlice.actions;

export default sequencerSlice.reducer;

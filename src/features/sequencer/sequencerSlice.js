import { createSlice } from '@reduxjs/toolkit';
import { getNextStep, initSequencer } from '../../support/sequencer';

export const sequencerSlice = createSlice({
  name: 'sequencerSlice',
  initialState: initSequencer,
  reducers: {
    setActiveStepsForLane(state, action) {
      const { laneId } = action.payload;
      if (state.lanes[laneId]) {
        state.lanes[laneId].activeSteps = action.payload.value;
      }
    },
    toggleStep(state, action) {
      const { laneId, stepId } = action.payload;
      if (state.lanes[laneId] && state.lanes[laneId].steps[stepId]) {
        state.lanes[laneId].steps[stepId].active = !state.lanes[laneId].steps[stepId].active;
      }
    },
    setSelectedStep(state, action) {
      state.selectedStep = { id: action.payload.id, laneId: action.payload.laneId };
    },
    setLaneCurrentStep(state, action) {
      const { laneId, stepId } = action.payload;
      if (state.lanes[laneId] && state.lanes[laneId].steps[stepId]) {
        state.lanes[laneId].currentStep = stepId;
      }
    },
    advanceAllSteps(state) {
      const keys = Object.keys(state.lanes);
      keys.forEach((k) => {
        state.lanes[k].currentStep = getNextStep(state.lanes[k]);
      });
    },
    resetAllCurrentSteps(state) {
      const keys = Object.keys(state.lanes);
      state.lanes = Object.fromEntries(keys, keys.map((k) => ({
        ...state.lanes[k],
        currentStep: 1
      })));
    },
    toggleLocked(state) {
      state.locked = !state.locked;
    }
  },
});

export const {
  setActiveStepsForLane,
  toggleStep,
  setSelectedStep,
  setLaneCurrentStep,
  toggleLocked,
  resetAllCurrentSteps,
  advanceAllSteps
} = sequencerSlice.actions;

export default sequencerSlice.reducer;

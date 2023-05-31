import { createSlice } from '@reduxjs/toolkit';
import { initSequencer } from '../../support/sequencer';

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
    }
  },
});

export const {
  setActiveStepsForLane, toggleStep, setSelectedStep, setLaneCurrentStep
} = sequencerSlice.actions;

export default sequencerSlice.reducer;

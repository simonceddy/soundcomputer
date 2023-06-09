import { createSlice } from '@reduxjs/toolkit';
import {
  getNextStep,
  initSequencer,
  randomizeLane as rLane,
  randomizeStep as rStep
} from '../../support/sequencer';

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
    setLaneDirection(state, action) {
      const { laneId, value } = action.payload;
      if (state.lanes[laneId]) {
        state.lanes[laneId].direction = Number(value);
      }
    },
    advanceAllSteps(state) {
      const keys = Object.keys(state.lanes);
      keys.forEach((k) => {
        if (state.lanes[k].active) {
          state.lanes[k].currentStep = getNextStep(state.lanes[k]);
        }
      });
      // console.log(state.lanes[1].currentStep);
    },
    randomizeSequencer(state) {
      const keys = Object.keys(state.lanes);
      keys.forEach((k) => {
        state.lanes[k] = rLane(state.lanes[k]);
      });
    },
    randomizeLane(state, action) {
      if (state.lanes[action.payload]) {
        state.lanes[action.payload] = rLane(state.lanes[action.payload]);
      }
    },
    randomizeStep(state, action) {
      const { laneId, stepId } = action.payload;
      if (state.lanes[laneId] && state.lanes[laneId].steps[stepId]) {
        state.lanes[laneId].steps[stepId] = rStep(state.lanes[laneId].steps[stepId]);
      }
    },
    resetAllCurrentSteps(state) {
      const keys = Object.keys(state.lanes);
      keys.forEach((k) => {
        state.lanes[k].currentStep = 1;
      });
    },
    toggleLocked(state) {
      state.locked = !state.locked;
    },
    toggleActiveLane(state, action) {
      if (state.lanes[action.payload]) {
        state.lanes[action.payload].active = !state.lanes[action.payload].active;
      }
    },
    setSelectedLane(state, action) {
      state.selectedLane = action.payload;
    },
    setStepValue1(state, action) {
      const { laneId, stepId, value } = action.payload;
      if (state.lanes[laneId] && state.lanes[laneId].steps[stepId]) {
        state.lanes[laneId].steps[stepId].value1 = value;
      }
    },
    setStepValue2(state, action) {
      const { laneId, stepId, value } = action.payload;
      if (state.lanes[laneId] && state.lanes[laneId].steps[stepId]) {
        state.lanes[laneId].steps[stepId].value2 = value;
      }
    },
    setStepProbability(state, action) {
      const { laneId, stepId, value } = action.payload;
      if (state.lanes[laneId] && state.lanes[laneId].steps[stepId]) {
        state.lanes[laneId].steps[stepId].probability = value;
      }
    },
    setAll(state, action) {
      state.lanes = action.payload.lanes;
      state.locked = action.payload.locked;
      state.selectedLane = action.payload.selectedLane;
      state.selectedStep = action.payload.selectedStep;
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
  advanceAllSteps,
  setSelectedLane,
  randomizeSequencer,
  setStepValue1,
  setStepValue2,
  setStepProbability,
  setLaneDirection,
  setAll,
  randomizeLane,
  randomizeStep,
  toggleActiveLane
} = sequencerSlice.actions;

export default sequencerSlice.reducer;

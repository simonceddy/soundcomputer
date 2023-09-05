import { createSlice } from '@reduxjs/toolkit';
import { basicSetter } from '../../../shared/util';
import { SEQ_DIRECTION_FWD, initSteps } from './support';

function initState() {
  const state = {
    bpm: 120,
    running: false,
    currentStep: 0,
    steps: {},
    selectedStep: 0,
    start: 0,
    end: 15,
    direction: SEQ_DIRECTION_FWD,
  };

  initSteps((_v, id) => {
    state.steps[id] = {
      note: Math.round(Math.random() * 127),
      gate: null,
      probability: Math.random(),
      duration: 0.5,
      active: Math.random() > 0.55,
    };
  });

  return state;
}

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState: initState,
  reducers: {
    toggleRun(state) {
      state.running = !state.running;
    },
    setSelectedStep: basicSetter('selectedStep'),
    setCurrentStep: basicSetter('currentStep'),
    setStart: basicSetter('start'),
    setEnd: basicSetter('end'),
    setDirection: basicSetter('direction'),
    reset(state) {
      state.currentStep = state.start;
    },
    updateStep(state, action) {
      const step = state.steps[action.payload.id];
      if (step) {
        state.steps[action.payload.id] = { ...step, ...action.payload.data };
      }
    },
  },
});

export const {
  setCurrentStep,
  setEnd,
  setSelectedStep,
  setStart,
  updateStep,
  toggleRun,
  setDirection,
  reset
} = sequencerSlice.actions;

export default sequencerSlice.reducer;

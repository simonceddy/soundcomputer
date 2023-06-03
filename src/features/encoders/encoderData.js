import {
  setActiveStepsForLane, setStepProbability, setStepValue1, setStepValue2
} from '../sequencer/sequencerSlice';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK } from '../../support/consts';

export const encoder1 = {
  [DISPLAY_MODE_STEP]: {
    minVal: 0,
    maxVal: 127,
    microStepSize: 1,
    handler: (dispatch, store) => (value) => {
      const step = store.getState().sequencer.selectedStep;
      dispatch(setStepValue1({
        stepId: step.id,
        laneId: step.laneId,
        value: Math.round(value)
      }));
    }
  },
  [DISPLAY_MODE_TRACK]: {
    minVal: 1,
    maxVal: 16,
    microStepSize: 1,
    megaStepSize: 2,
    defaultVal: 16,
    value: (store) => {
      const seq = store.getState().sequencer;
      if (seq.selectedLane && seq.lanes[seq.selectedLane]) {
        return seq.lanes[seq.selectedLane].activeSteps;
      }
      return 16;
    },
    handler: (dispatch, store) => (value) => {
      dispatch(setActiveStepsForLane({
        laneId: store.getState().sequencer.selectedLane,
        value
      }));
    }
  }
};

export const encoder2 = {
  [DISPLAY_MODE_STEP]: {
    minVal: 0,
    maxVal: 127,
    microStepSize: 1,
    handler: (dispatch, store) => (value) => {
      const step = store.getState().sequencer.selectedStep;
      dispatch(setStepValue2({
        stepId: step.id,
        laneId: step.laneId,
        value: Math.round(value)
      }));
    }
  },
  [DISPLAY_MODE_TRACK]: {
    minVal: 0,
    maxVal: 4,
    microStepSize: 1,
    megaStepSize: 1,
    defaultVal: 0,
    // value: (store) => {
    //   const seq = store.getState().sequencer;
    //   if (seq.selectedLane && seq.lanes[seq.selectedLane]) {
    //     return seq.lanes[seq.selectedLane].activeSteps;
    //   }
    //   return 16;
    // },
    // handler: (dispatch, store) => (value) => {
    //   dispatch(setActiveStepsForLane({
    //     laneId: store.getState().sequencer.selectedLane,
    //     value
    //   }));
    // }
  }
};

export const encoder3 = {
  [DISPLAY_MODE_STEP]: {
    minVal: 0,
    maxVal: 1,
    stepSize: 0.1,
    megaStepSize: 0.2,
    microStepSize: 0.1,
    handler: (dispatch, store) => (value) => {
      const step = store.getState().sequencer.selectedStep;
      dispatch(setStepProbability({
        stepId: step.id,
        laneId: step.laneId,
        value
      }));
    }
  },
  [DISPLAY_MODE_TRACK]: {
    minVal: 0,
    maxVal: 4,
    microStepSize: 1,
    megaStepSize: 1,
    defaultVal: 0,
    // value: (store) => {
    //   const seq = store.getState().sequencer;
    //   if (seq.selectedLane && seq.lanes[seq.selectedLane]) {
    //     return seq.lanes[seq.selectedLane].activeSteps;
    //   }
    //   return 16;
    // },
    // handler: (dispatch, store) => (value) => {
    //   dispatch(setActiveStepsForLane({
    //     laneId: store.getState().sequencer.selectedLane,
    //     value
    //   }));
    // }
  }
};

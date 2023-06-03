/* eslint-disable no-unused-vars */
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK } from '../support/consts';
import { setActiveStepsForLane, setStepValue1 } from '../features/sequencer/sequencerSlice';
import * as encoders from '../features/encoders/encoderData';

function setupEncoderFor(displayMode) {
  switch (displayMode) {
    case DISPLAY_MODE_STEP:
      // Control value1
      return {
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
      };
    case DISPLAY_MODE_TRACK:
      return {
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
      };
    default:
      return {};
  }
}

export default function useEncoder(id = 'encoder1') {
  const { displayMode } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    sequencer: s.sequencer,
  }));
  const store = useStore();

  const dispatch = useDispatch();
  // console.log(encoders[id][displayMode]);
  const md = useMemo(() => {
    if (encoders[id] && encoders[id][displayMode]) {
      return encoders[id][displayMode];
    }
    return {};
  }, [displayMode]);

  const handler = useCallback(
    (md.handler ? md.handler(dispatch, store) : (v) => v),
    [md]
  );

  return {
    props: md,
    value: (typeof md.value === 'function') ? md.value(store) : md.value,
    handler
  };
}

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK } from '../support/consts';
import { setActiveStepsForLane, setStepValue1 } from '../features/sequencer/sequencerSlice';

function setupEncoderFor(displayMode) {
  switch (displayMode) {
    case DISPLAY_MODE_STEP:
      // Control value1
      return {
        minVal: 0,
        maxVal: 127,
        microStepSize: 1,
        handler: (dispatch, sequencer) => (value) => {
          const step = sequencer.selectedStep;
          dispatch(setStepValue1({
            stepId: step.id,
            laneId: step.laneId,
            value
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
        handler: (dispatch, sequencer) => (value) => {
          dispatch(setActiveStepsForLane({
            laneId: sequencer.selectedLane,
            value
          }));
        }
      };
    default:
      return {};
  }
}

export default function useEncoder1() {
  const { displayMode, sequencer } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    sequencer: s.sequencer,
  }));
  const dispatch = useDispatch();
  // console.log(displayMode);
  const md = useMemo(() => setupEncoderFor(displayMode), [displayMode]);

  const handler = useCallback(
    (md.handler ? md.handler(dispatch, sequencer) : (v) => v),
    [md]
  );

  return {
    props: md,
    handler
  };
}

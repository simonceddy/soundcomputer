import { useDispatch, useSelector } from 'react-redux';
import { DISPLAY_MODE_SONG, DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK } from '../support/consts';
import { randomizeSequencer, randomizeStep, randomizeLane } from '../features/sequencer/sequencerSlice';

export default function useRandomizer() {
  const { displayMode, selectedLane, selectedStep } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    selectedLane: s.sequencer.present.selectedLane,
    selectedStep: s.sequencer.present.selectedStep,
  }));

  // console.log(selectedLane, selectedStep);
  const dispatch = useDispatch();
  return () => {
    switch (displayMode) {
      case DISPLAY_MODE_SONG:
        dispatch(randomizeSequencer());
        break;
      case DISPLAY_MODE_STEP:
        dispatch(randomizeStep({ laneId: selectedStep.laneId, stepId: selectedStep.id }));
        break;
      case DISPLAY_MODE_TRACK:
        dispatch(randomizeLane(selectedLane));
        break;
      default:
    }
  };
}

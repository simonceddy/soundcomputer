import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLane, setSelectedStep, toggleStep } from '../../features/sequencer/sequencerSlice';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK, PAD_MODE_SEQ } from '../../support/consts';

function styleStep(step, padMode, displayMode, selected, currentStep, selectedLane) {
  // console.log(step.laneId, selectedLane);
  let styles = '';
  if (padMode === PAD_MODE_SEQ) {
    styles += step.active ? 'bg-green-400' : 'bg-slate-500';
  }

  if ((displayMode === DISPLAY_MODE_STEP
      && selected
      && selected.laneId === step.laneId
      && selected.id === step.id)
      || (displayMode === DISPLAY_MODE_TRACK && Number(selectedLane) === Number(step.laneId))
  ) {
    styles += ' border-yellow-400';
  } else if (currentStep === step.id) {
    styles += ' border-cyan-400';
  } else {
    styles += ' border-gray-400';
  }

  return styles;
}

function Step({
  children, id, stepId, laneId, disabled = false, className = ''
}) {
  const {
    step, selected, currentStep, locked, selectedLane
  } = useSelector((s) => ({
    step: s.sequencer.lanes[laneId].steps[stepId],
    selected: s.sequencer.selectedStep,
    currentStep: s.sequencer.lanes[laneId].currentStep,
    locked: s.sequencer.locked,
    selectedLane: s.sequencer.selectedLane
  }));
  const { padMode, displayMode } = useSelector((s) => s.kernel);
  const dispatch = useDispatch();
  // console.log(currentStep, step.id);

  if (!step) {
    throw Error('Invalid step');
  }

  const styles = () => styleStep(
    step,
    padMode,
    displayMode,
    selected,
    currentStep,
    selectedLane
  );

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={(e) => {
        if (!locked && !e.shiftKey && padMode === PAD_MODE_SEQ) {
          dispatch(toggleStep({
            stepId,
            laneId
          }));
        }
        if (selectedLane !== laneId) dispatch(setSelectedLane(laneId));
        dispatch(setSelectedStep(step));
      }}
      id={id}
      className={`sequencer-step border-2 ${styles()} w-10 h-10 m-2 rounded ${disabled ? 'opacity-40' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default Step;

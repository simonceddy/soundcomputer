import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStep, toggleStep } from '../../features/sequencer/sequencerSlice';
import { DISPLAY_MODE_STEP, PAD_MODE_SEQ } from '../../support/consts';

function styleStep(step, padMode, displayMode, selected, currentStep) {
  let styles = '';
  if (padMode === PAD_MODE_SEQ) {
    styles += step.active ? 'bg-green-400' : 'bg-slate-500';
  }

  if (displayMode === DISPLAY_MODE_STEP
      && selected
      && selected.laneId === step.laneId
      && selected.id === step.id
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
  children, id, stepId, laneId
}) {
  const {
    step, selected, currentStep, locked
  } = useSelector((s) => ({
    step: s.sequencer.lanes[laneId].steps[stepId],
    selected: s.sequencer.selectedStep,
    currentStep: s.sequencer.lanes[laneId].currentStep,
    locked: s.sequencer.locked
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
    currentStep
  );

  return (
    <button
      type="button"
      onClick={(e) => {
        if (!locked && !e.shiftKey && padMode === PAD_MODE_SEQ) {
          dispatch(toggleStep({
            stepId,
            laneId
          }));
        }
        dispatch(setSelectedStep(step));
      }}
      id={id}
      className={`sequencer-step border-2 ${styles()} w-8 h-8 m-2 rounded`}
    >
      {children}
    </button>
  );
}

export default Step;

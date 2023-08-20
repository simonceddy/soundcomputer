/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveStepsForLane, setSelectedLane, setSelectedStep, toggleStep
} from './sequencerSlice';
import {
  DISPLAY_MODE_STEP, DISPLAY_MODE_LANE, PAD_MODE_SEQ, DISPLAY_MODE_INSTRUMENT
} from '../../support/consts';

function makeBg(step, disabled) {
  if (disabled) return 'black';
  if (!step.active) return 'rgba(100,116,139)';
  const a = (step.probability / 2) + 0.5;
  return `rgba(74,222,128,${a})`;
}

function styleStep(
  step,
  padMode,
  displayMode,
  selected,
  currentStep,
  selectedLane,
  disabled = false
) {
  let styles = '';
  if ((displayMode === DISPLAY_MODE_STEP
      && selected
      && selected.laneId === step.laneId
      && selected.id === step.id)
      || (displayMode === DISPLAY_MODE_LANE
        && Number(selectedLane) === Number(step.laneId)
      )
  ) {
    styles += (currentStep !== step.id
      ? ' border-yellow-400 shadow-yellow-400 shadow-md'
      : 'border-orange-400 shadow-orange-500 shadow-md');
  } else if (displayMode === DISPLAY_MODE_INSTRUMENT && selected.laneId === step.laneId
  ) {
    styles += (currentStep === step.id
      ? ' border-purple-500 shadow-purple-500 shadow-md'
      : ' border-cyan-400 shadow-cyan-400 shadow-md');
  } else if (currentStep === step.id) {
    styles += ' border-pink-500 shadow-pink-500 shadow-md';
  } else {
    styles += ' border-gray-400';
  }

  return styles;
}

function Step({
  children,
  id,
  stepId,
  laneId,
  disabled = false,
  className = '',
  bottomRightLabel = null,
  bottomLeftLabel = null,
  topLeftLabel = null,
}) {
  const {
    step, selected, currentStep, locked, selectedLane
  } = useSelector((s) => ({
    step: s.sequencer.present.lanes[laneId].steps[stepId],
    selected: s.sequencer.present.selectedStep,
    currentStep: s.sequencer.present.lanes[laneId].currentStep,
    locked: s.sequencer.present.locked,
    selectedLane: s.sequencer.present.selectedLane
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
    selectedLane,
    disabled
  );

  return (
    <button
      // disabled={disabled}
      type="button"
      onClick={(e) => {
        if (!locked && !e.shiftKey && padMode === PAD_MODE_SEQ) {
          dispatch(toggleStep({
            stepId,
            laneId
          }));
        }
        if (selectedLane !== laneId) dispatch(setSelectedLane(laneId));
        if (displayMode === DISPLAY_MODE_LANE && e.altKey) {
          dispatch(setActiveStepsForLane({
            laneId,
            value: step.id
          }));
        } else {
          dispatch(setSelectedStep(step));
        }
      }}
      id={id}
      className={`sequencer-step border-4 ${styles()} w-10 h-10 m-2 rounded ${className} bg-slate-500 col all-center relative drop-shadow-lg`}
    >
      <span
        style={{
          backgroundColor: makeBg(step, disabled)
        }}
        className="absolute w-full h-full bg-slate-500 top-0 left-0 z-10"
      />
      {children}
      {topLeftLabel !== null && (
        <span className="absolute top-0 left-0 text-xs font-mono z-20 font-thin text-white">
          {topLeftLabel}
        </span>
      )}
      {bottomLeftLabel !== null && (
        <span className="absolute bottom-0 left-0 text-xs font-mono z-20 font-thin text-white">
          {bottomLeftLabel}
        </span>
      )}
      {bottomRightLabel !== null && (
        <span className="absolute bottom-0 right-0 text-xs font-mono z-20 font-thin text-pink-300">
          {bottomRightLabel}
        </span>
      )}
    </button>
  );
}

export default Step;

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveStepsForLane, setSelectedLane, setSelectedStep, toggleStep
} from '../../features/sequencer/sequencerSlice';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK, PAD_MODE_SEQ } from '../../support/consts';

// const opacityMap = {
//   0.0: 25,
//   0.1: 30,
//   0.2: 40,
//   0.3: 50,
//   0.4: 60,
//   0.5: 70,
//   0.6: 75,
//   0.7: 80,
//   0.8: 90,
//   0.9: 95,
//   1: 100
// };

function makeBg(step, disabled) {
  if (disabled) return 'black';
  if (!step.active) return 'rgba(100,116,139)';
  return `rgba(74,222,128,${step.probability})`;
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
  // console.log(`bg-green-400/${step.probability * 100}`);
  // const probOpacity = opacityMap[step.probability];
  let styles = '';
  // if (padMode === PAD_MODE_SEQ && !disabled) {
  //   styles += step.active ? `bg-green-400/[${step.probability}]` : 'bg-slate-500';
  // } else if (disabled) {
  //   styles += 'bg-black';
  // }

  if ((displayMode === DISPLAY_MODE_STEP
      && selected
      && selected.laneId === step.laneId
      && selected.id === step.id)
      || (displayMode === DISPLAY_MODE_TRACK
        && Number(selectedLane) === Number(step.laneId)
        && currentStep !== step.id
      )
  ) {
    styles += ' border-yellow-400';
  } else if (currentStep === step.id) {
    styles += ' border-pink-500';
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
        if (displayMode === DISPLAY_MODE_TRACK && e.altKey) {
          dispatch(setActiveStepsForLane({
            laneId,
            value: step.id
          }));
        } else {
          dispatch(setSelectedStep(step));
        }
      }}
      id={id}
      className={`sequencer-step border-4 ${styles()} w-10 h-10 m-2 rounded ${className} bg-slate-500 flex flex-col justify-center items-center relative`}
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

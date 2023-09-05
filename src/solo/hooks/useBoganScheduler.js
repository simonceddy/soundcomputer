/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { audioContext } from '../audio';
import { nextStep } from '../features/sequencer/support';
import { setCurrentStep } from '../features/sequencer/sequencerSlice';

function getNoteDuration(bpm = 120, duration = 0.5) {
  const noteMs = 60 / bpm;
  return noteMs * duration;
}

const getStepTime = (bpm, step) => {
  const stepTime = audioContext.currentTime + getNoteDuration(bpm, step.duration);
  return stepTime;
};

// const scheduleStep = (step, time) => {

// };

// let counter = 0;
// const schedule = [];

function useBoganScheduler() {
  const {
    bpm, currentStep, start, end, running, steps, direction
  } = useSelector((s) => s.sequencer);
  const dispatch = useDispatch();

  // const preSchedule = () => {
  //   schedule.push(steps[currentStep]);
  // };

  const scheduleNextStep = useCallback(() => {
    const next = nextStep({
      currentStep,
      start,
      end,
      direction
    });

    dispatch(setCurrentStep(next));
  }, [currentStep, start, end, direction]);

  return scheduleNextStep;
}

export default useBoganScheduler;

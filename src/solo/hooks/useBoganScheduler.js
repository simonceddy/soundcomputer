/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { audioContext } from '../audio';

function getNoteDuration(bpm = 120, duration = 0.5) {
  const noteMs = 60 / bpm;
  return noteMs * duration;
}

const getStepTime = (bpm, step) => {
  const stepTime = audioContext.currentTime + getNoteDuration(bpm, step.duration);
  return stepTime;
};

const scheduleStep = (step, time) => {

};

function useBoganScheduler() {
  const {
    bpm, currentStep, start, end, running, steps, direction
  } = useSelector((s) => s.sequencer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (running) {
      // start scheduling
    } else {
      // stop scheduling
    }
  }, [running]);
}

export default useBoganScheduler;

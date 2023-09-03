/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { audioContext, scheduleEvent } from '../audio';
import { nextStep } from '../features/sequencer/support';
import { setCurrentStep } from '../features/sequencer/sequencerSlice';

function getNoteDuration(bpm = 120, duration = 0.5) {
  const noteMs = 60 / bpm;
  return noteMs * duration;
}

export default function useScheduler() {
  const {
    bpm, currentStep, start, end, running, steps, direction
  } = useSelector((s) => s.sequencer);
  const dispatch = useDispatch();

  const getNext = () => {
    const nextTime = audioContext.currentTime + getNoteDuration(bpm, steps[currentStep].duration);
    scheduleEvent(nextTime, () => {
      console.log('does it work?');
      const newStep = nextStep({
        start, end, currentStep, direction
      });
      dispatch(setCurrentStep(newStep));
    });
  };

  return {
    run() {
      getNext();
    }
  };
}

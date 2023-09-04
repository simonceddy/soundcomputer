/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { audioContext } from '../audio';
import { EVENT_TYPES, nextStep } from '../features/sequencer/support';
import { setCurrentStep } from '../features/sequencer/sequencerSlice';

function getNoteDuration(bpm = 120, duration = 0.5) {
  const noteMs = 60 / bpm;
  return noteMs * duration;
}

// Example: Schedule a note-on event at 1 second

export default function useScheduler() {
  const {
    bpm, currentStep, start, end, running, steps, direction
  } = useSelector((s) => s.sequencer);
  const dispatch = useDispatch();
  const clockNode = new AudioWorkletNode(audioContext, 'clock-worker');
  clockNode.connect(audioContext.destination);
  // Handle scheduling by sending messages to the AudioWorklet
  clockNode.port.onmessage = (event) => {
    if (event.data === 'tick') {
      // Handle the clock tick here
      console.log('Clock tick');
      // Trigger any sequencer events or actions on each clock tick
    } else {
      console.log('mystery');
    }
  };

  // const newStep = nextStep({
  //   start, end, currentStep, direction
  // });
  // dispatch(setCurrentStep(newStep));

  const getNext = () => {
    const nextTime = audioContext.currentTime + getNoteDuration(bpm, steps[currentStep].duration);
    return nextTime;
  };

  return {
    run() {
      clockNode.port.postMessage('start');
      const duration = getNoteDuration(bpm, steps[currentStep].duration);
      // scheduleEvent('note-on', { pitch: 60, velocity: 80 }, duration);
    }
  };
}

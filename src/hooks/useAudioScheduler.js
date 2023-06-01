/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextStep } from '../support/sequencer';
import { advanceAllSteps, setLaneCurrentStep } from '../features/sequencer/sequencerSlice';

const lookahead = 25.0;
const scheduleAheadTime = 0.1;

let timerID;
let nextNoteTime = 0.0;
let currentNote = 0;

export default function useAudioScheduler(audioCtx) {
  const { sequencer, tempo } = useSelector((s) => ({
    padMode: s.kernel.padMode,
    sequencer: s.sequencer,
    tempo: s.song.tempo
  }));
  // const [timerID, setTimerID] = useState(null);
  // const [nextNoteTime, setNextNoteTime] = useState(0.0);

  const dispatch = useDispatch();

  const nextNote = () => {
    const secondsPerBeat = 60.0 / tempo;

    nextNoteTime += secondsPerBeat;
    currentNote = (currentNote + 1) % 16;
  };

  const scheduler = () => {
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
      // scheduleLanes();
      dispatch(advanceAllSteps());
      nextNote();
      // console.log(currentNote);
    }
    timerID = setTimeout(scheduler, lookahead);
  };
  return {
    scheduler,
    reset() {
      nextNoteTime = 0.0;
      currentNote = 0;
    },
    stopScheduler() {
      if (timerID) {
        clearInterval(timerID);
        timerID = null;
        // console.log(timerID);
      }
    }
  };
}

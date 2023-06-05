/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextStep } from '../support/sequencer';
import { advanceAllSteps, setLaneCurrentStep } from '../features/sequencer/sequencerSlice';

// const worker = new Worker('worklets/scheduler.js');
// console.log(worker);
// worker.postMessage('hello');

const lookahead = 25.0;
const scheduleAheadTime = 0.1;

let timerID;
let nextNoteTime = 0.0;
let currentNote = 1;

const queue = [];

/**
 *
 * @param {AudioContext} audioCtx
 * @returns
 */
export default function useAudioScheduler(audioCtx) {
  const { sequencer, tempo } = useSelector((s) => ({
    padMode: s.kernel.padMode,
    sequencer: s.sequencer.present,
    tempo: s.song.present.tempo
  }));
  // const laneKeys = Object.keys(sequencer.lanes);
  // const [timerID, setTimerID] = useState(null);
  // const [nextNoteTime, setNextNoteTime] = useState(0.0);

  const dispatch = useDispatch();

  const nextNote = useCallback(() => {
    const secondsPerBeat = 60.0 / tempo;

    nextNoteTime += secondsPerBeat;
    currentNote = (currentNote + 1) % 16;
  }, [tempo]);

  // const scheduleLanes = (beat, time) => {
  //   // queue.push({ beat, time });
  //   if (sequencer.lanes[1].steps[sequencer.lanes[1].currentStep]
  //     && sequencer.lanes[1].steps[sequencer.lanes[1].currentStep].active) {
  //     console.log('lane !');
  //   }
  //   if (sequencer.lanes[2].steps[sequencer.lanes[2].currentStep]
  //     && sequencer.lanes[2].steps[sequencer.lanes[2].currentStep].active) {
  //     console.log('lane @');
  //   }
  //   if (sequencer.lanes[3].steps[sequencer.lanes[3].currentStep]
  //     && sequencer.lanes[3].steps[sequencer.lanes[3].currentStep].active) {
  //     console.log('lane #');
  //   }
  //   if (sequencer.lanes[4].steps[sequencer.lanes[4].currentStep]
  //     && sequencer.lanes[4].steps[sequencer.lanes[4].currentStep].active) {
  //     console.log('lane $');
  //   }
  //   if (sequencer.lanes[5].steps[sequencer.lanes[5].currentStep]
  //     && sequencer.lanes[5].steps[sequencer.lanes[5].currentStep].active) {
  //     console.log('lane %');
  //   }
  //   if (sequencer.lanes[6].steps[sequencer.lanes[6].currentStep]
  //     && sequencer.lanes[6].steps[sequencer.lanes[6].currentStep].active) {
  //     console.log('lane ^');
  //   }
  //   if (sequencer.lanes[7].steps[sequencer.lanes[7].currentStep]
  //     && sequencer.lanes[7].steps[sequencer.lanes[7].currentStep].active) {
  //     console.log('lane &');
  //   }
  //   if (sequencer.lanes[8].steps[sequencer.lanes[8].currentStep]
  //     && sequencer.lanes[8].steps[sequencer.lanes[8].currentStep].active) {
  //     console.log('lane *');
  //   }
  // };

  const scheduler = () => {
    // worker.postMessage({ sequencer });
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
      // scheduleLanes(currentNote, nextNoteTime);
      dispatch(advanceAllSteps());
      nextNote();
      // console.log(currentNote);
    }
    timerID = setTimeout(scheduler, lookahead);
  };
  return {
    start() {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      scheduler(); // kick off scheduling
    },
    reset() {
      nextNoteTime = 0.0;
      currentNote = 0;
    },
    stopScheduler() {
      if (timerID) {
        nextNoteTime = 0.0;
        currentNote = 0;
        clearInterval(timerID);
        timerID = null;
        // audioCtx.suspend();
        // console.log(timerID);
      }
    }
  };
}

/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advanceAllSteps } from '../features/sequencer/sequencerSlice';
import { scheduleStep } from '../../support/midi';
import { playStep } from '../../support/instruments';

const lookahead = 25.0;
const scheduleAheadTime = 0.1;

let nextNoteTime = 0.0;
let currentNote = 0;

const timerWorker = new Worker('worklets/metronomeWorker.js');

timerWorker.postMessage({ interval: lookahead });

/**
 *
 * @param {AudioContext} audioCtx
 * @returns
 */
export default function useAudioScheduler(audioCtx) {
  const {
    tempo, sequencer, enableMidi, assignments
  } = useSelector((s) => ({
    tempo: s.song.present.tempo,
    sequencer: s.sequencer.present,
    enableMidi: s.kernel.config.enableMidi || true,
    assignments: s.instruments.assignments
  }));

  const dispatch = useDispatch();

  const nextNote = useCallback(() => {
    const secondsPerBeat = 60.0 / tempo;

    nextNoteTime += secondsPerBeat;
    currentNote = (currentNote + 1) % 16;
  }, [tempo]);
  // console.log(assignments);

  const scheduleSteps = (beat, time) => {
    const t = time - audioCtx.currentTime;
    const gate = 30 / tempo;
    const lanes = Object.values(sequencer.lanes);
    lanes.forEach((lane) => {
      // console.log(lane);
      if (lane.active
        && lane.steps[lane.currentStep]
        && lane.steps[lane.currentStep].active
      ) {
        if (enableMidi) scheduleStep(lane.steps[lane.currentStep], t, gate);
        if (assignments[lane.id] !== 0) {
          // TODO play instrument
          // console.log(lane.steps[lane.currentStep]);
          playStep(lane.steps[lane.currentStep], time, assignments[lane.id]);
        }
      }
    });
  };

  const scheduler = () => {
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
      scheduleSteps(currentNote, nextNoteTime);
      dispatch(advanceAllSteps());
      nextNote();
    }
  };

  timerWorker.onmessage = (e) => {
    if (e.data === 'tick') {
      scheduler();
    } else { console.log(`message: ${e.data}`); }
  };

  return {
    start() {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      // scheduler(); // kick off scheduling
      timerWorker.postMessage('start');
    },
    reset() {
      nextNoteTime = audioCtx.currentTime;
      currentNote = 0;
    },
    stopScheduler() {
      timerWorker.postMessage('stop');
    }
  };
}

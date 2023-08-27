/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { advanceAllSteps, resetAll } from '../features/sequencer/sequencerSlice';
import { nextStep } from '../features/sequencer/support';
// import { advanceAllSteps } from '../features/sequencer/sequencerSlice';
// import { scheduleStep } from '../support/midi';
import { playStep } from '../../support/instruments';

const lookahead = 25.0;
const scheduleAheadTime = 0.1;

let nextNoteTime = 0.0;
let currentNote = 0;

const timerWorker = new Worker('worklets/metronomeWorker.js');

timerWorker.postMessage({ interval: lookahead });

/**
 *
 * @param {AudioContext} engine
 * @returns
 */
export default function useScheduler(ctx) {
  const {
    bpm
  } = useSelector((s) => s.app);
  const { tracks } = useSelector((s) => s.sequencer);
  const { assignments } = useSelector((s) => s.instruments);
  const dispatch = useDispatch();
  // console.log(assignments);

  const scheduleSteps = (beat, time) => {
    // const t = time - engine.currentTime;
    // const gate = 30 / bpm;
    const steps = [];

    const trks = Object.values(tracks);
    trks.forEach((trk, id) => {
      // console.log(trk);
      if (trk.active
        && trk.steps[trk.currentStep]
        && trk.steps[trk.currentStep].active
      ) {
        // if (enableMidi) scheduleStep(trk.steps[trk.currentStep], t, gate);
        if (assignments[id] !== 0) {
          // console.log(assignments[id]);
          //   // TODO play instrument
          //   // console.log(trk.steps[trk.currentStep]);
          playStep(trk.steps[trk.currentStep], time, assignments[id]);
        }
      }
      steps[id] = nextStep(id, trk);
      // dispatch(setNextStep({ track: id, step: nextStep(id, trk) }));
    });

    return steps;
  };

  const nextNote = () => {
    const secondsPerBeat = 60.0 / bpm;

    nextNoteTime += secondsPerBeat;
    currentNote = (currentNote + 1) % 64;
  };

  const scheduler = () => {
    while (nextNoteTime < ctx.currentTime + scheduleAheadTime) {
      const steps = scheduleSteps(currentNote, nextNoteTime);
      // console.log('new steps');
      dispatch(advanceAllSteps(steps));
      nextNote();
    }
  };

  timerWorker.onmessage = (e) => {
    if (e.data === 'tick') {
      // console.log('ticked');
      scheduler();
    } else { console.log(`message: ${e.data}`); }
  };

  return {
    start() {
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      currentNote = 0;
      nextNoteTime = ctx.currentTime;
      // scheduler(); // kick off scheduling
      timerWorker.postMessage('start');
    },
    reset() {
      console.log('reset!');
      nextNoteTime = ctx.currentTime;
      currentNote = 0;
      dispatch(resetAll());
    },
    stopScheduler() {
      timerWorker.postMessage('stop');
    }
  };
}

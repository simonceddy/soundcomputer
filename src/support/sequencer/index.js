// import { toMidi } from '@tonaljs/midi';

/* eslint-disable no-unused-vars */
export const SEQ_DIRECTION_FWD = 0;
export const SEQ_DIRECTION_REV = 1;
export const SEQ_DIRECTION_PPG = 2;
export const SEQ_DIRECTION_PEN = 3;
export const SEQ_DIRECTION_RND = 4;

export function initSequencer() {
  const lanes = {};
  (new Int8Array(8)).forEach((_v1, k1) => {
    const steps = {};
    (new Int8Array(16)).forEach((_v2, k2) => {
      steps[k2 + 1] = {
        laneId: k1 + 1,
        id: k2 + 1,
        value1: 48,
        value2: 0,
        probability: 1,
        active: false,
      };
    });
    lanes[k1 + 1] = {
      active: true,
      direction: SEQ_DIRECTION_FWD,
      currentStep: 1,
      id: k1 + 1,
      steps,
      activeSteps: 16
    };
  });
  // console.log(lanes);
  return {
    lanes,
    selectedStep: { id: 1, laneId: 1 },
    locked: false,
    selectedLane: 1,
  };
}

const ascLanes = {};

// TODO IF HELL
export function getNextStep(lane) {
  const { currentStep, direction, activeSteps } = lane;
  if ((direction === SEQ_DIRECTION_PEN || direction === SEQ_DIRECTION_PPG)
    && ascLanes[lane.id] === undefined
  ) {
    ascLanes[lane.id] = 1;
  }
  if (direction === SEQ_DIRECTION_PPG) {
    if (ascLanes[lane.id] === 0) {
      if (currentStep === 1) {
        ascLanes[lane.id] = 1;
        return 1;
      }
      return currentStep - 1;
    }
    if (ascLanes[lane.id] === 1) {
      if (lane.currentStep === activeSteps) {
        ascLanes[lane.id] = 0;
        return activeSteps;
      }
      return currentStep + 1;
    }
  }
  if (direction === SEQ_DIRECTION_PEN) {
    if (ascLanes[lane.id] === 0) {
      if (currentStep === 1) {
        ascLanes[lane.id] = 1;
        return currentStep + 1;
      }
      return currentStep - 1;
    }
    if (ascLanes[lane.id] === 1) {
      if (lane.currentStep === activeSteps) {
        ascLanes[lane.id] = 0;
        return activeSteps - 1;
      }
      return currentStep + 1;
    }
  }
  if (direction === SEQ_DIRECTION_REV) {
    return currentStep <= 1 ? activeSteps : currentStep - 1;
  }
  if (direction === SEQ_DIRECTION_RND) {
    return Math.ceil(Math.random() * activeSteps);
  }
  return currentStep >= activeSteps ? 1 : currentStep + 1;
}

export function randomizeStep(step) {
  // console.log(step);
  const probability = Math.random() > 0.5 ? (Math.ceil(Math.random() * 10) * 0.1) : 1;
  return {
    ...step,
    probability: Number(probability.toLocaleString('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })),
    value1: Math.ceil(Math.random() * 128) - 1,
    value2: Math.ceil(Math.random() * 128) - 1,
    // note: Math.ceil(Math.random() * 128) - 1,
    active: Math.random() > 0.6,
  };
}

export function randomizeLane(lane) {
  // console.log(lane);
  const stepKeys = Object.keys(lane.steps);
  // console.log(stepKeys);

  const activeSteps = Math.ceil(Math.random() * 16);
  return {
    ...lane,
    direction: Math.floor(Math.random() * 5),
    currentStep: 1,
    activeSteps,
    steps: Object.fromEntries(stepKeys.map((k) => [k, randomizeStep(lane.steps[k])]))
  };
}

// const audioCtx = new AudioContext();

// ms
// const lookahead = 25.0;

// // sec
// const scheduleAheadTime = 0.1;

// let currentNote = 0;
// let nextNoteTime = 0.0; // when the next note is due.

// function nextNote(lane, tempo = 120) {
//   const secondsPerBeat = 60.0 / tempo;

//   nextNoteTime += secondsPerBeat; // Add beat length to last beat time

//   // Advance the beat number, wrap to zero when reaching 4
//   currentNote = (currentNote + 1) % (lane.activeSteps || 16);
// }

// const noteQueues = {};

// function scheduleNote(lane, beatNumber, time) {
//   if (!noteQueues[lane.id]) noteQueues[lane.id] = [];
//   // Push the note on the queue, even if we're not playing.
//   noteQueues[lane.id].push({ note: beatNumber, time });
// }

// function scheduleLanes(lanes, tempo) {
//   Object.keys(lanes).forEach((k) => {
//     const n = lanes[k].currentStep;
//     const nT = nextNoteTime;
//     scheduleNote(lanes[k], n, nT);
//     nextNote(lanes[k], tempo);
//   });
// }

// let timerID;

// export function scheduler(sequencer, tempo = 120) {
//   // While there are notes that will need to play before the next interval,
//   // schedule them and advance the pointer.
//   while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
//     scheduleLanes(sequencer.lanes, tempo);
//     // scheduleNote(currentNote, nextNoteTime);
//     // console.log(notesInQueue);
//     // nextNote(tempo);
//   }
//   console.log(noteQueues);
//   timerID = setTimeout(scheduler, lookahead);
// }

// export function clearSchedule() {
//   if (timerID) clearInterval(timerID);
// }

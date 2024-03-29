// import { toMidi } from '@tonaljs/midi';

import { initTracks } from '../app/support';

/* eslint-disable no-unused-vars */
export const SEQ_DIRECTION_FWD = 0;
export const SEQ_DIRECTION_REV = 1;
export const SEQ_DIRECTION_PPG = 2;
export const SEQ_DIRECTION_PEN = 3;
export const SEQ_DIRECTION_RND = 4;

export function initStep() {
  return {
    note: Math.floor(Math.random() * 127),
    active: Math.random() > 0.57,
    probability: Math.random() > 0.54 ? Math.random() : 1,
  };
}

export function initTrack() {
  const steps = {};
  (new Int8Array(64)).forEach((_v, id) => {
    steps[id] = initStep();
  });

  return {
    steps,
    start: 0,
    end: 15,
    direction: SEQ_DIRECTION_FWD,
    currentStep: 0,
  };
}

export function initSequencer() {
  const tracks = {};
  initTracks((_v1, k1) => {
    tracks[k1] = initTrack();
  });
  // console.log(lanes);
  return {
    tracks,
    selectedStep: 0,
    locked: false,
  };
}

const ascLanes = {};

function stepPingPong(id, track) {
  if (ascLanes[id] === 0) {
    if (track.currentStep === track.start) {
      ascLanes[id] = 0;
      return track.start;
    }
    return track.currentStep - 1;
  }
  if (track.currentStep === track.end) {
    ascLanes[id] = 0;
    return track.end;
  }
  return track.currentStep + 1;
}

function stepPend(id, track) {
  if (ascLanes[id] === 0) {
    if (track.currentStep === track.start) {
      ascLanes[id] = 1;
      return track.currentStep + 1;
    }
    return track.currentStep - 1;
  }
  if (track.currentStep === track.end) {
    ascLanes[id] = 0;
    return track.end - 1;
  }
  return track.currentStep + 1;
}

export function nextStep(id, track) {
  // console.log(track);
  const {
    currentStep, direction, start, end
  } = track;

  if ((direction === SEQ_DIRECTION_PEN || direction === SEQ_DIRECTION_PPG)
    && ascLanes[id] === undefined
  ) {
    ascLanes[id] = 1;
  }
  switch (direction) {
    case SEQ_DIRECTION_PPG:
      return stepPingPong(id, track);
    case SEQ_DIRECTION_PEN:
      return stepPend(id, track);
    case SEQ_DIRECTION_REV:
      return currentStep <= start ? end : currentStep - 1;
    case SEQ_DIRECTION_RND:
      return Math.floor(Math.random() * (end - start)) + start;
    case SEQ_DIRECTION_FWD:
    default:
      return currentStep >= end ? start : currentStep + 1;
  }
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
    note: Math.floor(Math.random() * 127),
    active: Math.random() > 0.6,
  };
}

export function randomizeTrack(track) {
  // console.log(track);
  const stepKeys = Object.keys(track.steps);
  // console.log(stepKeys);

  const start = Math.floor(Math.random() * 48);
  const end = Math.floor(Math.random() * 16) + start;
  return {
    ...track,
    direction: Math.floor(Math.random() * 5),
    currentStep: start,
    start,
    end,
    steps: Object.fromEntries(stepKeys.map((k) => [k, randomizeStep(track.steps[k])]))
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

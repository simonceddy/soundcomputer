/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
console.log('eeeeee');

const tempo = 120;
let nextNoteTime = 0.0;
let timerID = null;
let currentNote = 0;
let startTime;
let laneKeys;
let sequencer;

const nextNote = () => {
  const secondsPerBeat = 60.0 / tempo;

  nextNoteTime += secondsPerBeat;
  currentNote = (currentNote + 1) % 16;
};

const scheduleAheadTime = 0.1;

const lookahead = 25.0;

const scheduleNext = (currentTime) => {
  while (nextNoteTime < currentTime + scheduleAheadTime) {
    // scheduleLanes();
    // dispatch(advanceAllSteps());
    nextNote();
    // console.log(currentNote);
  }
  // timerID = setTimeout(() => scheduler(currentTime), lookahead);
};

onmessage = (e) => {
  if (e.data.sequencer) {
    sequencer = e.data.sequencer;
    if (sequencer.lanes) laneKeys = Object.keys(sequencer.lanes);
  }
  console.log(sequencer, laneKeys);
};

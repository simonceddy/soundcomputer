export default class Scheduler {
  /** @type {number} */
  lookahead = 25.0;

  /** @type {number} */
  bpm = 120;

  /** @type {number} */
  scheduleAheadTime = 0.1;

  /** @type {AudioContext} */
  context;

  nextNoteInTime = 0.0;

  currentNote = 0;

  constructor(context, bpm = 120) {
    this.context = context;
    this.bpm = bpm;
  }

  nextNote() {
    const secondsPerBeat = 60.0 / this.bpm;

    this.nextNoteTime += secondsPerBeat;
    this.currentNote = (this.currentNote + 1) % 64;
  }

  run(callback = null) {
    while (this.nextNoteTime < this.context.currentTime + this.scheduleAheadTime) {
      // scheduleSteps(currentNote, nextNoteTime);
      // dispatch(advanceAllSteps());
      if (callback) callback(this);
      this.nextNote();
    }
  }
}

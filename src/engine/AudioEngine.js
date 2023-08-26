import Scheduler from './Scheduler';

export default class AudioEngine {
  /** @type {number} */
  sampleRate = 44100;

  /** @type {AudioContext} */
  context;

  /** @type {Scheduler} */
  scheduler;

  /**
   *
   * @param {AudioContext} context
   */
  constructor(context) {
    this.context = context;
    this.sampleRate = context.sampleRate;
    this.scheduler = new Scheduler();
  }
}

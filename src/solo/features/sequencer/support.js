export const SEQ_DIRECTION_FWD = 0;
export const SEQ_DIRECTION_REV = 1;
export const SEQ_DIRECTION_PPG = 2;
export const SEQ_DIRECTION_PEN = 3;
export const SEQ_DIRECTION_RND = 4;

export function initSteps(callback) {
  if (callback) {
    (new Int8Array(128)).forEach(callback);
  }
}

let ascLane = 0;

function stepPingPong(track) {
  if (ascLane === 0) {
    if (track.currentStep === track.start) {
      ascLane = 1;
      return track.start;
    }
    return track.currentStep - 1;
  }
  if (track.currentStep === track.end) {
    ascLane = 0;
    return track.end;
  }
  return track.currentStep + 1;
}

function stepPend(track) {
  if (ascLane === 0) {
    if (track.currentStep === track.start) {
      ascLane = 1;
      return track.currentStep + 1;
    }
    return track.currentStep - 1;
  }
  if (track.currentStep === track.end) {
    ascLane = 0;
    return track.end - 1;
  }
  return track.currentStep + 1;
}

export const EVENT_TYPES = {
  NOTE_ON: 'note-on',
  NOTE_OFF: 'note-off',
  // Add more event types as needed
};

export function nextStep(track) {
  // console.log(track);
  const {
    currentStep, direction, start, end
  } = track;

  if ((direction === SEQ_DIRECTION_PEN || direction === SEQ_DIRECTION_PPG)
    && ascLane === undefined
  ) {
    ascLane = 1;
  }
  switch (direction) {
    case SEQ_DIRECTION_PPG:
      return stepPingPong(track);
    case SEQ_DIRECTION_PEN:
      return stepPend(track);
    case SEQ_DIRECTION_REV:
      return currentStep <= start ? end : currentStep - 1;
    case SEQ_DIRECTION_RND:
      return Math.floor(Math.random() * (end - start)) + start;
    case SEQ_DIRECTION_FWD:
    default:
      return currentStep >= end ? start : currentStep + 1;
  }
}

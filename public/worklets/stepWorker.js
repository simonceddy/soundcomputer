/* eslint-disable no-unused-vars */
const lastSteps = {};

const SEQ_DIRECTION_FWD = 0;
const SEQ_DIRECTION_REV = 1;
const SEQ_DIRECTION_PPG = 2;
const SEQ_DIRECTION_PEN = 3;
const SEQ_DIRECTION_RND = 4;

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

function nextStep(id, track) {
  // TODO
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

onmessage = (e) => {
  if (e.data) {
    // TODO
    console.log(e.data);
  }
};

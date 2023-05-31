export function initSequencer() {
  const lanes = {};
  (new Int8Array(8)).forEach((_v1, k1) => {
    const steps = {};
    (new Int8Array(16)).forEach((_v2, k2) => {
      steps[k2 + 1] = {
        laneId: k1 + 1,
        id: k2 + 1,
        value1: 0,
        value2: 0,
        probability: 1,
      };
    });
    lanes[k1 + 1] = {
      currentStep: 1,
      id: k1 + 1,
      steps,
      activeSteps: 16
    };
  });
  // console.log(lanes);
  return {
    lanes,
    selectedStep: null
  };
}

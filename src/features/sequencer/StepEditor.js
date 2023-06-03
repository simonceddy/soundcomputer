import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from '../display/displaySlice';
import { setStepValue2, setStepValue1, setStepProbability } from './sequencerSlice';

function StepEditor() {
  const step = useSelector((s) => {
    const { selectedStep } = s.sequencer.present;
    return selectedStep
      ? s.sequencer.present.lanes[selectedStep.laneId].steps[selectedStep.id]
      : null;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && step) dispatch(setHeader(`Track ${step.laneId} - Step ${step.id}`));
    return () => {
      setup = true;
    };
  }, [step]);

  // console.log(step);
  return (
    <div className="flex flex-col justify-start items-center text-sm w-full">
      {step ? (
        <>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="underline">
              Value 1
            </span>
            <span>
              {step.value1}
            </span>
            <span>
              <input
                value={step.value1}
                min={0}
                max={127}
                step={1}
                onChange={(e) => {
                  dispatch(setStepValue1({
                    value: e.target.value,
                    stepId: step.id,
                    laneId: step.laneId,
                  }));
                }}
                type="range"
              />
            </span>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="underline">
              Value 2
            </span>
            <span>
              {step.value2}
            </span>
            <span>
              <input
                value={step.value2}
                min={0}
                max={127}
                step={1}
                onChange={(e) => {
                  dispatch(setStepValue2({
                    value: e.target.value,
                    stepId: step.id,
                    laneId: step.laneId,
                  }));
                }}
                type="range"
              />
            </span>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="underline">
              Probability
            </span>
            <span>
              {Math.round(step.probability * 100)}%
            </span>
            <span>
              <input
                value={step.probability}
                min={0}
                max={1}
                step={0.01}
                onChange={(e) => {
                  dispatch(setStepProbability({
                    value: e.target.value,
                    stepId: step.id,
                    laneId: step.laneId,
                  }));
                }}
                type="range"
              />
            </span>
          </div>
        </>
      ) : 'No Step Selected'}
    </div>
  );
}

export default StepEditor;

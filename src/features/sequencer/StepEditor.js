import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from '../display/displaySlice';

function StepEditor() {
  const step = useSelector((s) => {
    const { selectedStep } = s.sequencer;
    return selectedStep ? s.sequencer.lanes[selectedStep.laneId].steps[selectedStep.id] : null;
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
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="underline">
              Value 2
            </span>
            <span>
              {step.value2}
            </span>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="underline">
              Probability
            </span>
            <span>
              {step.probability * 100}%
            </span>
          </div>
        </>
      ) : 'No Step Selected'}
    </div>
  );
}

export default StepEditor;

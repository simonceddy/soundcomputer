import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from './displaySlice';

function StepDisplay({ children }) {
  const step = useSelector((s) => {
    const { selectedStep } = s.sequencer;
    return selectedStep ? s.sequencer.lanes[selectedStep.laneId].steps[selectedStep.id] : null;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && step) dispatch(setHeader(`Trk ${step.laneId} - Step ${step.id}`));
    return () => {
      setup = true;
    };
  }, [step]);

  console.log(step);
  return (
    <div>
      Step Display
      {children}
    </div>
  );
}

export default StepDisplay;

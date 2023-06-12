import { useDispatch, useSelector } from 'react-redux';
// import midiNote from 'midi-note';
import { midiToNoteName } from '@tonaljs/midi';
import { setStepValue2, setStepValue1, setStepProbability } from './sequencerSlice';
import { TabHeader } from '../../components/Tabs';
import Range from '../../components/Range';

function StepEditor() {
  const step = useSelector((s) => {
    const { selectedStep } = s.sequencer.present;
    return selectedStep
      ? s.sequencer.present.lanes[selectedStep.laneId].steps[selectedStep.id]
      : null;
  });
  const dispatch = useDispatch();

  // console.log(step);
  return (
    <div className="col justify-start items-center text-sm w-full">
      {step ? (
        <>
          <TabHeader>
            Track {step.laneId} - Step {step.id}
          </TabHeader>
          <div className="w-full row justify-start items-center">
            <span className="underline w-1/6">
              Note
            </span>
            <span className="w-1/6">
              {midiToNoteName(step.value1)}
            </span>
            <span>
              <Range
                vertical
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
              />
            </span>
          </div>
          <div className="w-full row justify-start items-center">
            <span className="underline w-1/6">
              Velocity
            </span>
            <span className="w-1/6">
              {step.value2}
            </span>
            <span>
              <Range
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
              />
            </span>
          </div>
          <div className="w-full row justify-start items-center">
            <span className="underline w-1/6">
              Probability
            </span>
            <span className="w-1/6">
              {Math.round(step.probability * 100)}%
            </span>
            <span>
              <Range
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
              />
            </span>
          </div>
        </>
      ) : 'No Step Selected'}
    </div>
  );
}

export default StepEditor;

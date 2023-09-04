/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import StepButton from '../../components/Sequencer/StepButton';
import { setSelectedStep, toggleRun, updateStep } from './sequencerSlice';
import { PlayIcon } from '../../components/icons';
// import useScheduler from '../../hooks/useScheduler';

const rows = [];

(new Int8Array(8)).forEach((_rv, rid) => {
  const steps = [];
  (new Int8Array(16)).forEach((_sv, sid) => {
    steps.push(sid + (rid * 16));
  });
  rows.push(steps);
});

function Sequencer() {
  const {
    currentStep, steps, selectedStep, direction, running, start, end
  } = useSelector((s) => s.sequencer);
  const dispatch = useDispatch();
  // const { run } = useScheduler();

  return (
    <div className="col w-full justify-start items-center">
      <div>
        <button
          className={`w-12 h-12 rounded-full border-2 border-slate-600 ${running ? 'bg-green-400' : 'bg-slate-400'} active:border-yellow-400 col all-center active:text-slate-100`}
          type="button"
          onClick={() => {
            // run();
            dispatch(toggleRun());
          }}
        >
          <PlayIcon size={42} />
        </button>
      </div>
      <div className="col w-full justify-start items-center">
        {rows.map((rowSteps, id) => (
          <div className="w-full row all-center" key={`sequencer-row-${id}`}>
            {rowSteps.map((step) => (
              <StepButton
                disabled={!(step >= start && step <= end)}
                key={`sequencer-step-${step}`}
                current={step === currentStep}
                active={steps[step].active}
                selected={step === selectedStep}
                probability={steps[step].probability}
                onClick={(e) => {
                  if (step === selectedStep || e.shiftKey) {
                    dispatch(updateStep({
                      id: step,
                      data: {
                        active: !steps[step].active
                      }
                    }));
                  } else if (!step !== selectedStep) {
                    dispatch(setSelectedStep(step));
                  }
                }}
              >
                {step + 1}
              </StepButton>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sequencer;

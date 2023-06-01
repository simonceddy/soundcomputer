/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { Step, TrackLane } from '../../components/Sequencer';
// import { scheduler } from '../../support/sequencer';

function Sequencer() {
  const { lanes } = useSelector((s) => ({
    lanes: s.sequencer.lanes,
    // tempo: s.song.tempo
  }));
  // scheduler({ lanes }, tempo);
  // console.log(lanes);
  return (
    <div className="flex flex-col justify-start items-start">
      {Object.keys(lanes).map((laneKey) => (
        <TrackLane key={laneKey}>
          <span className="text-slate-300 border-r flex flex-col justify-center items-start pr-1 h-full border-slate-400/70">{laneKey}</span>
          {Object.keys(lanes[laneKey].steps).map((stepKey) => (
            <Step
              disabled={stepKey > lanes[laneKey].activeSteps}
              stepId={stepKey}
              laneId={laneKey}
              key={stepKey}
              id={`lane-${laneKey}-step-${stepKey}`}
            />
          ))}
        </TrackLane>
      ))}
    </div>
  );
}

export default Sequencer;

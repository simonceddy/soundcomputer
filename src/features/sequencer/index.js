import { useSelector } from 'react-redux';
import { Step, TrackLane } from '../../components/Sequencer';

function Sequencer() {
  const { lanes } = useSelector((s) => s.sequencer);
  // console.log(lanes);
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {Object.keys(lanes).map((laneKey) => (
        <TrackLane key={laneKey}>
          <span className="text-slate-300 border-r flex flex-col justify-center items-start pr-1 h-full border-slate-400/70">Trk{laneKey}</span>
          {Object.keys(lanes[laneKey].steps).map((stepKey) => (
            <Step
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

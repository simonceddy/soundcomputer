/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { Step, TrackLane } from '../../components/Sequencer';
import { padMappings } from '../../support/pads';
// import { scheduler } from '../../support/sequencer';
// console.log(padMappings);
function Sequencer() {
  const { lanes } = useSelector((s) => ({
    lanes: s.sequencer.present.lanes,
    // tempo: s.song.tempo
  }));
  // scheduler({ lanes }, tempo);
  // console.log(lanes);
  return (
    <div className="flex flex-col justify-start items-start">
      {Object.keys(lanes).map((laneKey) => (
        <TrackLane key={laneKey}>
          <span className="text-slate-300 border-r flex flex-col justify-center items-start pr-1 h-full border-slate-400/70">{laneKey}</span>
          {Object.keys(lanes[laneKey].steps).map((stepKey) => {
            const padKey = `${laneKey}-${stepKey}`;
            // console.log(padKey);
            const padMapping = padMappings[padKey];
            // if (padMapping) console.log(padMapping);
            return (
              <Step
                disabled={stepKey > lanes[laneKey].activeSteps}
                stepId={stepKey}
                laneId={laneKey}
                key={stepKey}
                id={`lane-${laneKey}-step-${stepKey}`}
                bottomRightLabel={padMapping !== undefined && padMapping.bottomRightLabel ? (
                  padMapping.bottomRightLabel
                ) : null}
                bottomLeftLabel={padMapping !== undefined && padMapping.bottomLeftLabel ? (
                  padMapping.bottomLeftLabel
                ) : null}
                topLeftLabel={padMapping !== undefined && padMapping.topLeftLabel ? (
                  padMapping.topLeftLabel
                ) : null}
              />
            );
          })}
        </TrackLane>
      ))}
    </div>
  );
}

export default Sequencer;

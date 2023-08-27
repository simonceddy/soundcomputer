/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { TrackLane } from '../../components/Sequencer';
import { padMappings } from '../../support/pads';
import Step from './Step';

function Sequencer() {
  const { lanes } = useSelector((s) => ({
    lanes: s.sequencer.present.lanes,
  }));

  return (
    <div className="col justify-start items-start">
      {Object.keys(lanes).map((laneKey) => (
        <TrackLane key={laneKey}>
          <span className="text-slate-300 border-r col justify-center items-start pr-1 h-full border-slate-400/70">{laneKey}</span>
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

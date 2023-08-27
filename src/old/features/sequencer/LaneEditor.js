// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SEQ_DIRECTION_FWD, SEQ_DIRECTION_PEN, SEQ_DIRECTION_PPG, SEQ_DIRECTION_REV, SEQ_DIRECTION_RND
} from '../../support/sequencer';
import { TabHeader } from '../../components/Tabs';
import { setLaneDirection } from './sequencerSlice';
import { formatBool } from '../../util';

const directions = {
  [SEQ_DIRECTION_FWD]: 'FWD',
  [SEQ_DIRECTION_REV]: 'REV',
  [SEQ_DIRECTION_PPG]: 'PPG',
  [SEQ_DIRECTION_PEN]: 'PEN',
  [SEQ_DIRECTION_RND]: 'RND',
};

const dKeys = Object.keys(directions);

function DirectionSelector({ val, onChange }) {
  // console.log(onChange);
  return (
    <select
      className="p-2 border-2 rounded-md font-mono text-teal-800 dark:text-teal-200 bg-slate-100 dark:bg-slate-900 border-slate-500"
      value={val}
      onChange={onChange}
    >
      {dKeys.map((d) => (
        <option key={d} label={directions[d]} value={d} />
      ))}
    </select>
  );
}

function LaneEditor() {
  const { selectedLane, lanes } = useSelector((s) => s.sequencer.present);
  const dispatch = useDispatch();
  return (
    <div className="col justify-start items-center text-sm">
      {selectedLane ? (
        <>
          <TabHeader>
            {`Lane ${selectedLane}`}
          </TabHeader>
          <div className="row justify-between items-center w-full">
            <span>
              Active
            </span>
            <span>
              {formatBool(lanes[selectedLane].active)}
            </span>
          </div>
          <div className="row justify-between items-center w-full">
            <span>
              Steps
            </span>
            <span>
              {lanes[selectedLane].activeSteps}
            </span>
          </div>
          <div className="row justify-between items-center w-full">
            <span>
              Direction
            </span>
            <span>
              <DirectionSelector
                val={lanes[selectedLane].direction}
                onChange={(e) => {
                  dispatch(setLaneDirection({
                    laneId: selectedLane,
                    value: e.target.value
                  }));
                }}
              />
            </span>
          </div>
        </>
      ) : 'No track selected'}
    </div>
  );
}

export default LaneEditor;

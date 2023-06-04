import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from '../display/displaySlice';
import {
  SEQ_DIRECTION_FWD, SEQ_DIRECTION_PEN, SEQ_DIRECTION_PPG, SEQ_DIRECTION_REV, SEQ_DIRECTION_RND
} from '../../support/sequencer';

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
    <select value={val} onChange={onChange}>
      {dKeys.map((d) => (
        <option key={d} label={directions[d]} value={d} />
      ))}
    </select>
  );
}

function LaneEditor() {
  const { selectedLane, lanes } = useSelector((s) => s.sequencer.present);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && selectedLane) dispatch(setHeader(`Track ${selectedLane}`));
    return () => {
      setup = true;
    };
  }, [selectedLane]);
  return (
    <div className="flex flex-col justify-start items-center text-sm">
      {selectedLane ? (
        <>
          <div className="flex flex-row justify-between items-center w-full">
            <span>
              Pattern length
            </span>
            <span>
              {lanes[selectedLane].activeSteps}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <span>
              Direction
            </span>
            <span>
              <DirectionSelector
                val={lanes[selectedLane].direction}
                onChange={(e) => console.log(e.target.value)}
              />
            </span>
          </div>
        </>
      ) : 'No track selected'}
    </div>
  );
}

export default LaneEditor;

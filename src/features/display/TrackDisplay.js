import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from './displaySlice';

function TrackDisplay() {
  const { selectedLane, lanes } = useSelector((s) => s.sequencer);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && selectedLane) dispatch(setHeader(`Track ${selectedLane}`));
    return () => {
      setup = true;
    };
  }, [selectedLane]);
  return (
    <div className="col justify-start items-center text-sm">
      {selectedLane ? (
        <>
          <div className="row justify-between items-center w-full">
            <span>
              Pattern length
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
              {lanes[selectedLane].direction}
            </span>
          </div>
        </>
      ) : 'No track selected'}
    </div>
  );
}

export default TrackDisplay;

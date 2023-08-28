import { useDispatch, useSelector } from 'react-redux';
import KnobController from '../KnobController';
import { selectSelectedTrackKey } from '../../tracks/tracksSlice';
import { setAssignment } from '../../instruments/instrumentsSlice';

function TypeController() {
  const selectedTrackKey = useSelector(selectSelectedTrackKey);
  const val = useSelector((s) => s.instruments.assignments[selectedTrackKey]);
  const dispatch = useDispatch();

  return (
    <KnobController
      microStepSize={0.1}
      maxVal={1}
      minVal={0}
      megaStepSize={1}
      label="Mode"
      onChange={(v) => {
        dispatch(setAssignment({
          track: selectedTrackKey,
          instrument: Math.round(v)
        }));
      }}
      value={val}
    />
  );
}

export default TypeController;

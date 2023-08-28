import { useDispatch, useSelector } from 'react-redux';
import KnobController from '../KnobController';
import { selectCurrentSeqTrackStart, setTrackStart } from '../../sequencer/sequencerSlice';
import { selectSelectedTrackKey } from '../../tracks/tracksSlice';

function StartController() {
  const selectedTrackKey = useSelector(selectSelectedTrackKey);
  const val = useSelector(selectCurrentSeqTrackStart);
  const dispatch = useDispatch();

  return (
    <KnobController
      microStepSize={0.1}
      label="Start"
      onChange={(v) => {
        dispatch(setTrackStart({
          track: selectedTrackKey,
          start: Math.round(v)
        }));
      }}
      value={val}
    />
  );
}

export default StartController;

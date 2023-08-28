import { useDispatch, useSelector } from 'react-redux';
import KnobController from '../KnobController';
import { setTrackEnd } from '../../sequencer/sequencerSlice';
import { selectSelectedTrackKey } from '../../tracks/tracksSlice';

function EndController() {
  const selectedTrackKey = useSelector(selectSelectedTrackKey);
  const val = useSelector((s) => s.sequencer.tracks[selectedTrackKey].end);
  const dispatch = useDispatch();

  return (
    <KnobController
      microStepSize={0.1}
      label="End"
      onChange={(v) => {
        dispatch(setTrackEnd({
          track: selectedTrackKey,
          end: Math.round(v)
        }));
      }}
      value={val}
    />
  );
}

export default EndController;

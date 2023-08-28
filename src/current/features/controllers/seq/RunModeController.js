import { useDispatch, useSelector } from 'react-redux';
import KnobController from '../KnobController';
import { selectCurrentSeqTrack, setTrackDirection } from '../../sequencer/sequencerSlice';
import { selectSelectedTrackKey } from '../../tracks/tracksSlice';
import { SEQ_DIRECTION_FWD } from '../../../../support/sequencer';
import {
  SEQ_DIRECTION_PEN, SEQ_DIRECTION_PPG, SEQ_DIRECTION_REV, SEQ_DIRECTION_RND
} from '../../sequencer/support';

const labels = {
  [SEQ_DIRECTION_FWD]: '→→→',
  [SEQ_DIRECTION_REV]: '←←←',
  [SEQ_DIRECTION_PPG]: '•←→•',
  [SEQ_DIRECTION_PEN]: '←→',
  [SEQ_DIRECTION_RND]: '???',
};

function RunModeController() {
  const selectedTrackKey = useSelector(selectSelectedTrackKey);
  const track = useSelector(selectCurrentSeqTrack);
  const dispatch = useDispatch();

  return (
    <KnobController
      microStepSize={0.1}
      minVal={0}
      maxVal={4}
      stepSize={1}
      megaStepSize={4}
      label={labels[track.direction]}
      onChange={(v) => {
        dispatch(setTrackDirection({
          track: selectedTrackKey,
          direction: Math.round(v)
        }));
      }}
      value={track.direction || 0}
    />
  );
}

export default RunModeController;

import { useDispatch, useSelector } from 'react-redux';
import KnobController from '../KnobController';
import { selectCurrentSeqTrack, updateStep } from '../../sequencer/sequencerSlice';
import { selectSelectedTrackKey } from '../../tracks/tracksSlice';

function NoteController() {
  const selectedTrackKey = useSelector(selectSelectedTrackKey);
  const track = useSelector(selectCurrentSeqTrack);
  const stepId = useSelector((s) => s.sequencer.selectedStep);
  const dispatch = useDispatch();
  console.log(Math.floor(((track.steps[stepId]?.note || 48) / 12) - 1));

  return (
    <KnobController
      microStepSize={0.1}
      minVal={0}
      maxVal={127}
      label="Note"
      onChange={(v) => {
        dispatch(updateStep({
          track: selectedTrackKey,
          step: stepId,
          data: {
            note: Math.round(v)
          }
        }));
      }}
      value={track.steps[stepId]?.note || 48}
    />
  );
}

export default NoteController;

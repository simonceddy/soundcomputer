import { useSelector } from 'react-redux';
import DisplaySubHeading from '../../components/DisplaySubHeading';

function SequenceDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const track = useSelector((s) => s.sequencer.tracks[selectedTrackKey]);
  if (!track) return <div>Error: Unknown track!</div>;
  return (
    <div className="col">
      <DisplaySubHeading>Track {selectedTrackKey + 1}</DisplaySubHeading>
      <div className="row">
        <span>Start step:</span>
        <span>{track.start}</span>
      </div>
      <div className="row">
        <span>End step:</span>
        <span>{track.end}</span>
      </div>
      <div className="row">
        <span>Sequence length:</span>
        <span>{(track.end + 1) - track.start}</span>
      </div>
    </div>
  );
}

export default SequenceDisplay;

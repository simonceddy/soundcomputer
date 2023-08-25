import { useSelector } from 'react-redux';

function SequenceDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const track = useSelector((s) => s.sequencer.tracks[selectedTrackKey]);
  if (!track) return <div>Error: Unknown track!</div>;
  return (
    <div className="col">
      <span>Track {selectedTrackKey + 1}</span>
      <span>
        Sequence is {(track.end + 1) - track.start} steps long.
      </span>
      <span>Start at step {track.start}</span>
      <span>End at step {track.end}</span>
    </div>
  );
}

export default SequenceDisplay;

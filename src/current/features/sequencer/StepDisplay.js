import { useSelector } from 'react-redux';

function StepDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const selectedStep = useSelector((s) => s.sequencer.selectedStep);
  return (
    <div>
      Track {selectedTrackKey + 1} - Step {selectedStep + 1}
    </div>
  );
}

export default StepDisplay;

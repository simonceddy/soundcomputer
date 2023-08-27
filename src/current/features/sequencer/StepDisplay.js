import { useSelector } from 'react-redux';
import { midiToNoteName } from '@tonaljs/midi';
import { useMemo } from 'react';
import DisplaySubHeading from '../../components/DisplaySubHeading';
import DisplayValueContainer from '../../components/DisplayValueContainer';

function splitNote(note = 48) {
  const noteString = midiToNoteName(note);
  const n = noteString.substring(0, noteString.length - 1);
  const o = noteString.substring(noteString.length - 1);
  return [n, o];
}

function StepDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const { selectedStep, tracks } = useSelector((s) => s.sequencer);
  if (!tracks[selectedTrackKey]) return <div>Error: Undefined track!</div>;
  if (!tracks[selectedTrackKey]?.steps[selectedStep]) return <div>Error: Undefined step!</div>;
  // console.log(tracks[selectedTrackKey]);
  const [note, octave] = useMemo(
    () => splitNote(tracks[selectedTrackKey]?.steps[selectedStep].note),
    [selectedTrackKey, selectedStep]
  );
  return (
    <div>
      <DisplaySubHeading>
        Track {selectedTrackKey + 1} - Step {selectedStep + 1}
      </DisplaySubHeading>
      <div className="row justify-between items-center">
        <span className="mr-1">
          Note:
        </span>
        <DisplayValueContainer>
          {note}
        </DisplayValueContainer>
        <span className="ml-2 mr-1">
          Octave:
        </span>
        <DisplayValueContainer>
          {octave}
        </DisplayValueContainer>
      </div>
      <div>
        <span className="mr-1">
          Probability
        </span>
        <DisplayValueContainer>
          {Math.round(tracks[selectedTrackKey].steps[selectedStep].probability * 100).toLocaleString('en-us', {
            minimumIntegerDigits: 3
          })} %
        </DisplayValueContainer>

      </div>
    </div>
  );
}

export default StepDisplay;

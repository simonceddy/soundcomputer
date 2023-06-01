import { useSelector } from 'react-redux';
import DisplayContainer from '../../components/Display';
import {
  DISPLAY_MODE_MIDI,
  DISPLAY_MODE_PATTERN,
  DISPLAY_MODE_SONG,
  DISPLAY_MODE_STEP,
  DISPLAY_MODE_TRACK
} from '../../support/consts';
import SongDisplay from './SongDisplay';
import StepDisplay from './StepDisplay';
import TrackDisplay from './TrackDisplay';
import MidiDisplay from './MidiDisplay';

const data = {
  [DISPLAY_MODE_SONG]: SongDisplay,
  [DISPLAY_MODE_STEP]: StepDisplay,
  [DISPLAY_MODE_PATTERN]: () => <div>Pattern mode</div>,
  [DISPLAY_MODE_MIDI]: MidiDisplay,
  [DISPLAY_MODE_TRACK]: TrackDisplay,
};

function Display() {
  const { displayMode } = useSelector((s) => s.kernel);
  const { header } = useSelector((s) => s.display);
  const Component = data[displayMode] || false;
  return (
    <DisplayContainer header={header}>
      {Component && <Component />}
    </DisplayContainer>
  );
}

export default Display;

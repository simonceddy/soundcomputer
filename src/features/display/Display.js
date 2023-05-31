import { useSelector } from 'react-redux';
import DisplayContainer from '../../components/Display';
import { DISPLAY_MODE_SONG, DISPLAY_MODE_STEP } from '../../support/consts';
import SongDisplay from './SongDisplay';
import StepDisplay from './StepDisplay';

const data = {
  [DISPLAY_MODE_SONG]: SongDisplay,
  [DISPLAY_MODE_STEP]: StepDisplay
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

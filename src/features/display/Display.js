import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import DisplayContainer from '../../components/Display';
import {
  DISPLAY_MODE_CONF,
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
import { setNotification } from './displaySlice';
import ConfDisplay from './ConfDisplay';

const data = {
  [DISPLAY_MODE_SONG]: SongDisplay,
  [DISPLAY_MODE_STEP]: StepDisplay,
  [DISPLAY_MODE_PATTERN]: () => <div>Pattern mode</div>,
  [DISPLAY_MODE_MIDI]: MidiDisplay,
  [DISPLAY_MODE_TRACK]: TrackDisplay,
  [DISPLAY_MODE_CONF]: ConfDisplay,
};

function Display() {
  const { displayMode, booted, notify } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    booted: s.kernel.booted,
    notify: s.display.notify
  }));
  const { header } = useSelector((s) => s.display);
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState(null);
  const Component = data[displayMode] || false;

  useEffect(() => {
    if (notify !== null) {
      setTimeoutId(setTimeout(() => dispatch(setNotification(null)), 2000));
    }
  }, [notify]);

  return (
    <DisplayContainer header={header}>
      {notify !== null ? (
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center"
          role="presentation"
          onClick={() => {
            if (timeoutId) {
              clearTimeout(timeoutId);
              setTimeoutId(null);
              dispatch(setNotification(null));
            }
          }}
        >
          <span className="bg-slate-900 dark:bg-slate-300 text-blue-200 dark:text-blue-900 p-2 border-2 border-blue-200 dark:border-blue-900 ">
            {notify}
          </span>
        </div>
      ) : null}
      {booted ? (Component && <Component />) : 'Booting...'}
    </DisplayContainer>
  );
}

export default Display;

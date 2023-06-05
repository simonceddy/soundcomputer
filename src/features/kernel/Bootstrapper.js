import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import { bootUp, setDisplayMode, togglePlaying } from './kernelSlice';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK } from '../../support/consts';
import { toggleLocked } from '../sequencer/sequencerSlice';

function Bootstrapper({ children }) {
  const { booted, displayMode } = useSelector((s) => s.kernel);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && !booted) {
      document.addEventListener('keydown', throttle((e) => {
        // console.log(e);
        if (e.altKey) {
          if (e.code === 'KeyS' && displayMode !== DISPLAY_MODE_STEP) {
            dispatch(setDisplayMode(DISPLAY_MODE_STEP));
          } else if (e.code === 'KeyT' && displayMode !== DISPLAY_MODE_TRACK) {
            dispatch(setDisplayMode(DISPLAY_MODE_TRACK));
          } else if (e.code === 'KeyL') {
            dispatch(toggleLocked());
          }
        } else if (e.code === 'Space') {
          dispatch(togglePlaying());
        }
      }, 200));
      setTimeout(() => dispatch(bootUp()), 1000);
    }
    return () => {
      setup = true;
    };
  });

  return children;
}

export default Bootstrapper;

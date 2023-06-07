/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { throttle } from 'lodash';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  bootUp, setAllConfig, setDisplayMode, togglePlaying
} from './kernelSlice';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK } from '../../support/consts';
import { randomizeSequencer, toggleLocked } from '../sequencer/sequencerSlice';
import { initConfig } from './config';
import { useRandomName } from '../../hooks';
// import { setSongName } from '../song/songSlice';

function Bootstrapper({ children }) {
  const { booted, displayMode, config } = useSelector((s) => s.kernel);
  const dispatch = useDispatch();

  const randomName = useRandomName();
  useHotkeys('alt+s,alt+t,alt+l,alt+space,alt+shift+r', (e, he) => {
    if (he.alt) {
      if (e.code === 'KeyS' && displayMode !== DISPLAY_MODE_STEP) {
        dispatch(setDisplayMode(DISPLAY_MODE_STEP));
      } else if (e.code === 'KeyT' && displayMode !== DISPLAY_MODE_TRACK) {
        dispatch(setDisplayMode(DISPLAY_MODE_TRACK));
      } else if (e.code === 'KeyL') {
        dispatch(toggleLocked());
      } else if (e.code === 'Space') {
        dispatch(togglePlaying());
      } else if (he.shift && e.code === 'KeyR') {
        dispatch(randomizeSequencer());
      }
    }
  }, { enabled: config.enableKeyboardShortcuts }, [config]);
  useEffect(() => {
    let setup = false;
    if (!setup && !booted) {
      initConfig()
        .then((conf) => {
          dispatch(setAllConfig({ ...config, ...conf }));
          randomName();
          if (config.lockSeqByDefault) dispatch(toggleLocked());
          setTimeout(() => dispatch(bootUp()), 1000);
        })
        .catch(console.error);
    }
    return () => {
      setup = true;
    };
  });

  return children;
}

export default Bootstrapper;

/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { throttle } from 'lodash';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  bootUp, setAllConfig, setDisplayMode, togglePlaying
} from './kernelSlice';
import { DISPLAY_MODE_STEP, DISPLAY_MODE_LANE } from '../../support/consts';
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
      } else if (e.code === 'KeyT' && displayMode !== DISPLAY_MODE_LANE) {
        dispatch(setDisplayMode(DISPLAY_MODE_LANE));
      } else if (e.code === 'KeyL') {
        dispatch(toggleLocked());
      } else if (e.code === 'Space') {
        dispatch(togglePlaying());
      } else if (he.shift && e.code === 'KeyR') {
        dispatch(randomizeSequencer());
      }
    }
  }, { enabled: config.enableKeyboardShortcuts }, [config]);

  async function setup() {
    try {
      const conf = await initConfig();
      dispatch(setAllConfig({ ...config, ...conf }));

      setTimeout(() => dispatch(bootUp()), 1000);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!booted) {
      setup();
    }
  }, []);

  useEffect(() => {
    if (booted) {
      if (config.lockSeqByDefault) dispatch(toggleLocked());
      // post setup config actions
      randomName();
    }
  }, [booted]);

  return children;
}

export default Bootstrapper;

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Bpm from './components/Bpm';
import { TopRow } from './components/Layout';
import Sequencer from './features/sequencer';
import SquareButton from './components/SquareButton';
import { randomizeSequencer, resetAllCurrentSteps, toggleLocked } from './features/sequencer/sequencerSlice';
import { useAudioScheduler } from './hooks';
import Bootstrapper from './features/kernel/Bootstrapper';
import { setNotification } from './features/display/displaySlice';
import Tabs from './features/kernel/Tabs';
import GlobalCtrlPanel from './features/kernel/GlobalCtrlPanel';
import './support/midi';
import NormSquareButton from './components/NormSquareButton';
import LoadSong from './features/song/LoadSong';
import { toggleLoadingSong, togglePlaying } from './features/kernel/kernelSlice';
import Notification from './features/display/Notification';

const audioCtx = new AudioContext();

function App() {
  const {
    displayMode, sequencer, loadingSong, playing
  } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    padMode: s.kernel.padMode,
    loadingSong: s.kernel.loadingSong,
    sequencer: s.sequencer.present,
    playing: s.kernel.playing,
  }));
  // console.log(displayMode);
  const dispatch = useDispatch();
  const { start, stopScheduler } = useAudioScheduler(audioCtx);

  useEffect(() => {
    // console.log(playing);
    if (playing) {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      start();
    } else {
      stopScheduler();
    }
  }, [playing]);

  return (
    <Bootstrapper>
      {loadingSong && (
        <div
          className="absolute w-full h-full z-40 flex flex-col justify-center items-center bg-slate-500/40"
          role="presentation"
          onClick={() => dispatch(toggleLoadingSong())}
        >
          <LoadSong />
        </div>
      )}
      <div className="w-full h-full text-lg bg-black font-mono font-bold text-teal-400 flex flex-col justify-start items-center p-2 relative">
        <TopRow>
          <div className="w-1/4 flex flex-col justify-between items-center p-2 m-2 rounded-md bg-slate-400/70">
            <Bpm />
            <div className="flex flex-row justify-around items-center w-full">
              <SquareButton
                onClick={(e) => {
                  if (e.shiftKey) {
                    dispatch(resetAllCurrentSteps());
                  } else dispatch(togglePlaying());
                }}
                shiftLabel="reset"
                active={playing}
                bgColour={playing ? 'bg-green-300' : 'bg-slate-300'}
                textColour="text-black"
                borderColour="border-black"
              >
                play
              </SquareButton>
              <NormSquareButton
                textColour={sequencer.locked ? 'text-black' : 'text-white'}
                onClick={(e) => {
                  dispatch(toggleLocked());
                }}
                bgColour={`${sequencer.locked ? 'bg-red-400' : 'bg-slate-500'}`}
              >
                seq lock
              </NormSquareButton>
              <NormSquareButton
                textColour="text-white active:text-black"
                onClick={(e) => {
                  dispatch(randomizeSequencer());
                  dispatch(setNotification('Randomized!'));
                }}
              >
                rand
              </NormSquareButton>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-2">
            <Notification />
            <GlobalCtrlPanel />
          </div>
          {/* <SquareButton
            shiftLabel="save"
            onClick={(e) => {
              if (e.shiftKey) {
                dispatch(setNotification('Saved'));
              } else if (displayMode !== DISPLAY_MODE_SONG) {
                dispatch(setDisplayMode(DISPLAY_MODE_SONG));
              }
            }}
            active={displayMode === DISPLAY_MODE_SONG}
          >
            song
          </SquareButton> */}
          {/* <SquareButton
            shiftLabel="track"
            onClick={(e) => {
              if (e.shiftKey) {
                dispatch(setDisplayMode(
                  displayMode === DISPLAY_MODE_TRACK ? DISPLAY_MODE_STEP : DISPLAY_MODE_TRACK
                ));
              } else {
                dispatch(setDisplayMode(
                  displayMode === DISPLAY_MODE_STEP ? DISPLAY_MODE_TRACK : DISPLAY_MODE_STEP
                ));
              }
            }}
            active={displayMode === DISPLAY_MODE_STEP}
          >
            step
          </SquareButton> */}
          {/* <SquareButton
            shiftLabel="midi"
            onClick={(e) => {
              if (e.shiftKey && displayMode !== DISPLAY_MODE_MIDI) {
                dispatch(setDisplayMode(DISPLAY_MODE_MIDI));
              } else if (displayMode !== DISPLAY_MODE_CONF) {
                dispatch(setDisplayMode(DISPLAY_MODE_CONF));
              }
            }}
            active={displayMode === DISPLAY_MODE_CONF}
          >
            conf
          </SquareButton> */}

          <Tabs />
        </TopRow>
        {sequencer && <Sequencer />}
      </div>
    </Bootstrapper>
  );
}

export default App;

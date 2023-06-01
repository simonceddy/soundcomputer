import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Bpm from './components/Bpm';
import Display from './features/display/Display';
import { TopRow } from './components/Layout';
import Sequencer from './features/sequencer';
import SquareButton from './components/SquareButton';
import {
  DISPLAY_MODE_MIDI, DISPLAY_MODE_SONG, DISPLAY_MODE_STEP, DISPLAY_MODE_TRACK
} from './support/consts';
import { setDisplayMode } from './features/kernel/kernelSlice';
import Encoders from './features/encoders';
import { resetAllCurrentSteps, toggleLocked } from './features/sequencer/sequencerSlice';
import { useAudioScheduler } from './hooks';
// import BigKnob from './features/bigknob/BigKnob';
import DisplayArea from './components/Display/DisplayArea';

const audioCtx = new AudioContext();

function App() {
  const { displayMode, sequencer } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    padMode: s.kernel.padMode,
    sequencer: s.sequencer,
  }));
  // console.log(displayMode);
  const [playing, setPlaying] = useState(false);
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
    <div className="w-full h-full text-lg bg-black font-mono font-bold text-teal-400 flex flex-col justify-center items-center p-2">
      <TopRow>
        <Bpm />
        <SquareButton
          onClick={(e) => {
            if (e.shiftKey) {
              dispatch(resetAllCurrentSteps());
            } else setPlaying(!playing);
          }}
          shiftLabel="reset"
          active={playing}
          bgColour={playing ? 'bg-green-300' : 'bg-slate-300'}
          textColour="text-black"
          borderColour="border-black"
        >
          play
        </SquareButton>
        <SquareButton
          shiftLabel="save"
          onClick={() => {
            if (displayMode !== DISPLAY_MODE_SONG) {
              dispatch(setDisplayMode(DISPLAY_MODE_SONG));
            }
          }}
          active={displayMode === DISPLAY_MODE_SONG}
        >
          song
        </SquareButton>
        <SquareButton
          shiftLabel="track"
          onClick={() => {
            dispatch(setDisplayMode(
              displayMode === DISPLAY_MODE_STEP ? DISPLAY_MODE_TRACK : DISPLAY_MODE_STEP
            ));
          }}
          active={displayMode === DISPLAY_MODE_STEP}
        >
          step
        </SquareButton>
        <SquareButton
          shiftLabel="midi"
          onClick={(e) => {
            if (e.shiftKey && displayMode !== DISPLAY_MODE_MIDI) {
              dispatch(setDisplayMode(DISPLAY_MODE_MIDI));
            }
          }}
          // active={displayMode === DISPLAY_MODE_STEP}
        >
          conf
        </SquareButton>
        <SquareButton
          onClick={() => {
            dispatch(toggleLocked());
          }}
          active={sequencer.locked}
        >
          lock
        </SquareButton>
        <DisplayArea>
          {/* <BigKnob /> */}
          <div className="flex flex-col justify-between items-center">
            <Display />
            <Encoders />
          </div>
        </DisplayArea>
      </TopRow>
      <Sequencer />
    </div>
  );
}

export default App;

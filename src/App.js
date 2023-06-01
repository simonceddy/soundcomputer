import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Bpm from './components/Bpm';
import Display from './features/display/Display';
import { TopRow } from './components/Layout';
import Sequencer from './features/sequencer';
import SquareButton from './components/SquareButton';
import { DISPLAY_MODE_SONG, DISPLAY_MODE_STEP } from './support/consts';
import { setDisplayMode } from './features/kernel/kernelSlice';
import Encoders from './features/encoders';
import { toggleLocked } from './features/sequencer/sequencerSlice';
import { useAudioScheduler } from './hooks';

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
  const { scheduler, stopScheduler, reset } = useAudioScheduler(audioCtx);

  useEffect(() => {
    // console.log(playing);
    if (playing) {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      scheduler();
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
            if (e.shiftKey) reset();
            else setPlaying(!playing);
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
          shiftLabel="song"
          onClick={() => {
            dispatch(setDisplayMode(
              displayMode === DISPLAY_MODE_STEP ? DISPLAY_MODE_SONG : DISPLAY_MODE_STEP
            ));
          }}
          active={displayMode === DISPLAY_MODE_STEP}
        >
          step
        </SquareButton>
        <SquareButton
          onClick={() => {
            dispatch(toggleLocked());
          }}
          active={sequencer.locked}
        >
          lock
        </SquareButton>
        <div className="flex flex-col justify-between items-center">
          <Display />
          <Encoders />
        </div>
      </TopRow>
      <Sequencer />
    </div>
  );
}

export default App;

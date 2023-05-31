import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Bpm from './components/Bpm';
import Display from './features/display/Display';
import { TopRow } from './components/Layout';
import Sequencer from './features/sequencer';
import SquareButton from './components/SquareButton';
import { DISPLAY_MODE_SONG, DISPLAY_MODE_STEP } from './support/consts';
import { setDisplayMode } from './features/kernel/kernelSlice';

function App() {
  const { displayMode } = useSelector((s) => s.kernel);
  const [playing, setPlaying] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full text-lg bg-black font-mono font-bold text-teal-400 flex flex-col justify-center items-center p-2">
      <TopRow>
        <Bpm />
        <SquareButton
          onClick={() => setPlaying(!playing)}
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
        <Display />
      </TopRow>
      <Sequencer />
    </div>
  );
}

export default App;

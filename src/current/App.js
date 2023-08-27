import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Bootloader from './Bootloader';
import Layout from './components/Layout';
import AppDisplay from './features/app/AppDisplay';
import Controllers from './features/controllers';
import Controls from './features/controls';
import LeftColButtons from './features/leftColButtons';
import Pads from './features/pads';
import RightColButtons from './features/rightColButtons';
import SystemControls from './features/systemControls';
import useScheduler from './hooks/useScheduler';
import audioContext from '../support/audioContext';
import AudioCtx from './AudioCtx';

function App() {
  const { start, stopScheduler, reset } = useScheduler(audioContext);
  const playing = useSelector((s) => s.app.playing);

  useEffect(() => {
    // console.log(playing);
    if (playing) {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      start();
    } else {
      stopScheduler();
    }
  }, [playing]);

  return (
    <AudioCtx.Provider value={audioContext}>
      <Bootloader>
        <Layout>
          <div className="row justify-between items-start px-4 pt-6 pb-2 w-full flex-1">
            <LeftColButtons />
            <div className="flex-1 h-full col justify-between items-center">
              <SystemControls />
              <AppDisplay />
              <Controllers />
            </div>
            <RightColButtons />
          </div>
          <Controls resetFn={reset} />
          <Pads />
        </Layout>
      </Bootloader>
    </AudioCtx.Provider>
  );
}

export default App;

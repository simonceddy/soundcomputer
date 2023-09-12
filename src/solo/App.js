/* eslint-disable no-unused-vars */
import { /* useEffect, */ useMemo, useState } from 'react';
// import { useSelector } from 'react-redux';
import Envelopes from './features/envelopes';
import Filters from './features/filters';
import Matrix from './features/modMatrix';
import Oscillator1 from './features/oscillators/Oscillator1';
import VCA from './features/vca';
import TabButton from './components/TabButton';
import {
  AudioEngine, AudioEngineContext, audioContext
} from './audio';
import Keyboard from './features/keyboard';
import Sequencer from './features/sequencer';
import Output from './features/master/Output';
// import useBoganScheduler from './hooks/useBoganScheduler';
// import tickHandler from './features/sequencer/tickHandler';
// import useClockWorker from './hooks/useClockWorker';

function App() {
  const [tab, setTab] = useState(0);
  const engine = useMemo(() => new AudioEngine(audioContext), []);
  // const {
  //   running
  // } = useSelector((s) => s.sequencer);
  // const dispatch = useDispatch();

  // useClockWorker();

  // console.log(engine);
  return (
    <AudioEngineContext.Provider value={engine}>
      <div className="w-full row justify-start items-start">
        {}
        <TabButton
          onClick={() => {
            if (tab !== 0) setTab(0);
          }}
        >
          Home
        </TabButton>
        <TabButton
          onClick={() => {
            if (tab !== 1) setTab(1);
          }}
        >
          Matrix
        </TabButton>
        <TabButton
          onClick={() => {
            if (tab !== 2) setTab(2);
          }}
        >
          Sequencer
        </TabButton>
      </div>
      <div className="w-full flex-1 col all-center">
        {tab === 1 && <Matrix />}
        {tab === 0 && (
        <>
          <div className="row justify-between items-end">
            <div className="flex-1 col justify-start items-start">
              <div className="row">
                <Oscillator1 />
                <Filters />
                <VCA />
                <Output />
              </div>
            </div>
          </div>
          <Envelopes />
          <div className="row all-center w-full">
            <Keyboard />
          </div>
        </>
        )}
        {tab === 2 && (
        <Sequencer />
        )}
      </div>
    </AudioEngineContext.Provider>
  );
}

export default App;

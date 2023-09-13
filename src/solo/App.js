/* eslint-disable no-unused-vars */
import { /* useEffect, */ useMemo, useState } from 'react';
// import { useSelector } from 'react-redux';
import Envelopes from './features/envelopes';
import Filters from './features/filters';
import Matrix from './features/modMatrix';
import Oscillator1 from './features/oscillators/Oscillator1';
// import VCA from './features/vca';
import TabButton from './components/TabButton';
import {
  AudioEngine, AudioEngineContext, audioContext
} from './audio';
import Keyboard from './features/keyboard';
import Sequencer from './features/sequencer';
import Output from './features/master/Output';
import Oscillator2 from './features/oscillators/Oscillator2';
import LFOs from './features/lfos';
import Help from './components/Help';
// import useBoganScheduler from './hooks/useBoganScheduler';
// import tickHandler from './features/sequencer/tickHandler';
// import useClockWorker from './hooks/useClockWorker';

function App() {
  const [tab, setTab] = useState(0);
  const [hideIssues, setHideIssues] = useState(false);
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
        {/* <TabButton
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
        </TabButton> */}
      </div>
      {!hideIssues && (
        <div className="col font-mono absolute top-1 right-1 p-2 rounded-lg bg-blue-200 dark:bg-blue-950 text-lime-900 dark:text-lime-300 w-[300px] whitespace-pre-wrap">
          <span className="font-bold">
            Work in progress. Known issues:
          </span>
          <ul className="list-disc list-inside">
            <li>
              Clicks and pops can become prevalent
            </li>
            <li>
              Filter sometimes turns off on noteoff
            </li>
            <li>
              Most params scale linearly.
            </li>
            <li>
              QWERTY keyboard doesn&apos;t trigger filter envelope
            </li>
          </ul>
          <button type="button" onClick={() => setHideIssues(true)}>OK</button>
        </div>
      )}
      <Help />
      <div className="w-full flex-1 col all-center">
        {tab === 1 && <Matrix />}
        {tab === 0 && (
        <>
          <div className="row justify-between items-end">
            <Oscillator1 />
            <Oscillator2 />
            <Filters />
            {/* <VCA /> */}
          </div>
          <div className="row">
            <LFOs />
            <Envelopes />
            <Output />
          </div>
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

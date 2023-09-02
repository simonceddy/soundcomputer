/* eslint-disable no-unused-vars */
import { useState } from 'react';
import GateButton from './components/GateButton';
import Envelopes from './features/envelopes';
import Filters from './features/filters';
import Matrix from './features/modMatrix';
import Oscillator1 from './features/oscillators/Oscillator1';
import VCA from './features/vca';
import TabButton from './components/TabButton';
import { init, playAudio } from './audio';
import Keyboard from './keyboard';

function App() {
  const [tab, setTab] = useState(0);
  const [booted, setBooted] = useState(false);

  return (
    <div className="dark:bg-black bg-yellow-100 text-black w-full h-full col all-center dark:text-white">
      {booted ? (
        <>
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
          </div>
          <div className="w-full flex-1 col all-center">
            {tab === 1 && <Matrix />}
            {tab === 0 && (
            <>
              <div className="row justify-between items-end">
                <div className="flex-1 col justify-start items-start">
                  <div className="row">
                    <Oscillator1 />
                  </div>
                  <div className="row">
                    <Filters />
                    <VCA />
                  </div>
                </div>
              </div>
              <Envelopes />
              <div className="row all-center w-full">
                <Keyboard />
                <GateButton onClick={() => playAudio((Math.random() * 1) + 60)} />
              </div>
            </>
            )}
          </div>
        </>
      ) : (
        <button
          type="button"
          onClick={() => {
            init().then(() => setBooted(true));
          }}
        >
          BEGIN
        </button>
      )}
    </div>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import GateButton from './components/GateButton';
import Envelopes from './features/envelopes';
import Filters from './features/filters';
import Matrix from './features/modMatrix';
import Oscillator1 from './features/oscillators/Oscillator1';
import VCA from './features/vca';
import TabButton from './components/TabButton';

async function playAudio() {
  console.log('eeee!');
}

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="dark:bg-black bg-yellow-100 text-black w-full h-full col all-center dark:text-white">
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
          <GateButton onClick={playAudio} />
        </>
        )}
      </div>
    </div>
  );
}

export default App;

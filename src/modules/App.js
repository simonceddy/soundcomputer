import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { useMemo } from 'react';
import PamelasProWorkout from './alm/pampro';
import ER101 from './orthagonal';
import Edvelope from './simod/edvelope';
import Simoscillator from './simod/oscillator';
import Simult from './simod/simult';
import Connection from './shared/components/Connection';
import SettingsModule from './app/SettingsModule';
// import { selectConnections } from './app/patchSlice';
import VCA from './simod/vca';
import Mixer from './simod/mixer';
import Attenuverter from './simod/attenuverter';
// import { selectCableOpacity } from './app/settingsSlice';

function App() {
  const { connections, isPatching } = useSelector((s) => s.patch);
  const cableAlpha = useSelector((s) => s.settings.cableAlpha);
  const patchLeadColours = [
    `rgba(255, 0, 0, ${cableAlpha || 0.7})`,
    `rgba(0, 255, 0, ${cableAlpha || 0.7})`,
    `rgba(0, 100, 255, ${cableAlpha || 0.7})`,
    `rgba(255, 200, 220, ${cableAlpha || 0.7})`
  ];

  const pL = patchLeadColours.length;
  // console.log(connections);

  return (
    <div id="module-rack" className="w-full h-full p-2 relative min-h-full min-w-full col font-sans justify-start items-start overflow-scroll whitespace-nowrap bg-black">
      <div className="w-auto h-fit row justify-start items-start">
        {isPatching && (
          <div className="absolute z-50 top-0">Patchin&apos;</div>
        )}
        {connections.map((c, id) => (
          <Connection
            id={c.key || id}
            key={`cable-${c.key || id}`}
            style={{
              backgroundColor: patchLeadColours[id % pL],
              stroke: patchLeadColours[id % pL],
            }}
            input={c.in}
            output={c.out}
          />
        ))}
        <PamelasProWorkout />
        <ER101 />
        <Edvelope />
        <Edvelope />
        <Edvelope />
        <Edvelope />
      </div>
      <div className="w-auto h-fit row justify-start items-start">
        <Simoscillator />
        <Simoscillator />
        <Attenuverter />
        <Attenuverter />
        <Simult />
        <Simult />
        <SettingsModule />
      </div>
      <div className="w-auto h-fit row justify-start items-start">
        <VCA />
        <VCA />
        <Mixer />
      </div>
    </div>
  );
}

export default App;

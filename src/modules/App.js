import { useSelector } from 'react-redux';
// import { useState } from 'react';
import PamelasProWorkout from './alm/pampro';
import ER101 from './orthagonal';
import Edvelope from './simod/edvelope';
import Simoscillator from './simod/oscillator';
import Simult from './simod/simult';
import Connection from './shared/components/Connection';

const patchLeadColours = [
  'rgba(255, 0, 0, 0.698)',
  'rgba(0, 255, 0, 0.698)',
  'rgba(0, 0, 255, 0.698)',
  'rgba(255, 255, 0, 0.698)'
];

const pL = patchLeadColours.length;

function App() {
  const { connections, isPatching } = useSelector((s) => s.patch);
  // console.log(connections);

  return (
    <div id="module-rack" className="w-full h-full p-2 relative min-h-full min-w-full col font-sans justify-start items-start overflow-scroll whitespace-nowrap bg-black">
      <div className="w-auto h-fit row justify-start items-start">
        {isPatching && (
          <div className="absolute z-50 top-0">Patchin&apos;</div>
        )}
        {connections.map((c, id) => (
          <Connection
            key={`cable-${id}`}
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
        <Simult />
        <Simult />
      </div>
    </div>
  );
}

export default App;

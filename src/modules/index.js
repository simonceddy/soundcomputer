import PamelasProWorkout from './alm/pampro';
import ER101 from './orthagonal';
import Edvelope from './simod/edvelope';
import Simoscillator from './simod/oscillator';
import Simult from './simod/simult';

function Modules() {
  return (
    <div className="w-full h-full p-2 min-h-full min-w-full col font-sans justify-start items-start overflow-scroll whitespace-nowrap bg-black">
      <div className="w-auto h-fit row justify-start items-start">
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

export default Modules;

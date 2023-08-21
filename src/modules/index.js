import PamelasProWorkout from './alm/pampro';
import ER101 from './orthagonal';
import Simoscillator from './simod/oscillator';

function Modules() {
  return (
    <div className="w-full h-full row font-sans all-center bg-black">
      <PamelasProWorkout />
      <ER101 />
      <Simoscillator />
    </div>
  );
}

export default Modules;

import MiniJack from '../../shared/components/MiniJack';
import CoarseTune from './CoarseTune';
import FineTune from './FineTune';
import Octave from './Octave';
import TuneCV from './TuneCV';

function TuningSection() {
  return (
    <div className="row w-[88%] justify-between items-center rounded-lg bg-lime-300/30 p-1 mt-10 mb-2">
      <div className="p-0.5 rounded-lg h-full bg-pink-300/30 col font-bold justify-center items-start w-[61px]">
        <div
          className="row justify-between h-full items-center w-full mb-1"
        >
          <span className="mb-2 text-xs underline">
            V/Oct
          </span>
          <MiniJack className="bg-green-400" />
        </div>
        <div
          className="row justify-between items-center w-full mb-1"
        >
          <span className="mb-2 text-xs">
            CV
          </span>
          <MiniJack className="bg-orange-400" />
        </div>
      </div>
      <div className="pt-3">
        <FineTune />
        <TuneCV />
      </div>
      <CoarseTune />
      <div className="col justify-around items-center h-full">
        <Octave />
      </div>
    </div>
  );
}

export default TuningSection;

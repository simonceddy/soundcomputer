import MiniJack from '../../shared/components/MiniJack';
import CoarseTune from './CoarseTune';
import FineTune from './FineTune';

function TuningSection() {
  return (
    <div className="row w-[88%] justify-between items-center mt-10 mb-2">
      <div className="mr-4 col font-bold justify-center items-start w-[61px]">
        <div
          className="row justify-between items-center w-full my-1"
        >
          <span className="mb-2 text-xs underline">
            V/Oct
          </span>
          <MiniJack className="bg-green-400" />
        </div>
        <div
          className="row justify-between items-center w-full my-1"
        >
          <span className="mb-2 text-xs">
            CV
          </span>
          <MiniJack className="bg-green-400" />
        </div>
      </div>
      <CoarseTune />
      <FineTune />
    </div>
  );
}

export default TuningSection;

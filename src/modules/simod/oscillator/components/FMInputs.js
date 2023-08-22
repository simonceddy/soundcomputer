import MiniJack from '../../shared/components/MiniJack';

function FMInputs() {
  return (
    <div className="p-1 col justify-evenly items-start rounded-lg bg-white/20 w-[61px]">
      <div
        className="row w-full justify-between items-start"
      >
        <span className="text-xs flex-1 text-right pr-1 font-semibold rotate-12">
          FM1
        </span>
        <MiniJack className="bg-red-400 mt-1" />
      </div>
      <div
        className="row w-full justify-between items-start"
      >
        <span className="text-xs flex-1 text-right pr-1 font-semibold rotate-12">
          FM2
        </span>
        <MiniJack className="bg-blue-400 mt-1" />
      </div>
    </div>
  );
}

export default FMInputs;

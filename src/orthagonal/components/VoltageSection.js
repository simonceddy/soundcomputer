import NumericalDisplay from './NumericalDisplay';
import OrangeLED from './OrangeLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function VoltageSection() {
  return (
    <div className="row ml-[9px] mr-[17px] pt-[1px]">
      <div className="col relative">
        <span className="absolute border-t-2 border-l-2 border-black rounded-tl-lg h-[7px] w-[115px] top-[5px] left-[15px]" />
        <div className="row justify-end items-center">
          <TextLabel>VOLTAGE</TextLabel>
        </div>
        <div className="row justify-start items-start">
          <SquareButton buttonClassName="bg-[#636363]" />
          <div className="col justify-around items-center py-1 ml-[4px] mr-[5px]">
            <OrangeLED className="mb-[6px]" />
            <OrangeLED />
          </div>
          <NumericalDisplay characters={4} />
        </div>
      </div>
      <span className="text-[20px] mt-4 ml-0.5 mr-0.5 font-sans uppercase font-bold">V</span>
    </div>
  );
}

export default VoltageSection;

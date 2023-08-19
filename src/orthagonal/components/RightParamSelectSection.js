import NumericalDisplay from './NumericalDisplay';
import OrangeLED from './OrangeLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function RightParamSelectSection({ label = '', className = '' }) {
  return (
    <div className={`col justify-start items-start ml-[9px] relative ${className}`}>
      <span className="absolute w-[83px] top-[5px] left-[22px] h-[7px] border-t-2 border-l-2 rounded-tl-lg border-black z-0" />
      <div className="row justify-end w-full items-start">
        <TextLabel className="uppercase bg-[#afafaf] pl-0.5 z-10">{label}</TextLabel>
      </div>
      <div className="flex flex-row-reverse justify-start items-center">
        <NumericalDisplay characters={2} />
        <OrangeLED className="my-auto mr-[4px]" />
        <div className="mr-[6px]">
          <SquareButton buttonClassName="bg-[#636363] z-10" />
        </div>
      </div>
    </div>
  );
}

export default RightParamSelectSection;

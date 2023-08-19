import NumericalDisplay from './NumericalDisplay';
import OrangeLED from './OrangeLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function LeftParamSelectSection({ label = '', className = '' }) {
  return (
    <div className={`col justify-start items-start ml-[9px] relative ${className}`}>
      <span className="absolute w-[83px] top-[5px] right-[15px] h-[7px] border-t-2 border-r-2 rounded-tr-lg border-black z-0" />
      <div className="row justify-start items-start">
        <TextLabel className="uppercase bg-[#afafaf] pr-0.5 z-10">{label}</TextLabel>
      </div>
      <div className="row justify-start items-center">
        <NumericalDisplay characters={2} />
        <OrangeLED className="my-auto ml-[4px]" />
        <div className="ml-[6px]">
          <SquareButton buttonClassName="bg-[#636363] z-10" />
        </div>
      </div>
    </div>
  );
}

export default LeftParamSelectSection;

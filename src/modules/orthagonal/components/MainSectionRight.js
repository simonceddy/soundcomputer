import RedLED from './RedLED';
import RightParamSelectSection from './RightParamSelectSection';
import RotaryKnob from './RotaryKnob';
import SquareButton from './SquareButton';

function MainSectionRight({ children }) {
  return (
    <div className="row w-[221px] pt-[10px]">
      <div className="col">
        {}
        <RightParamSelectSection label="CV-A" className="mb-[17px]" />
        <RightParamSelectSection label="CV-B" className="mb-[17px]" />
        <RightParamSelectSection label="DURATION" className="mb-[17px]" />
        <RightParamSelectSection label="GATE" />
      </div>
      <div className="col flex-1">
        <RotaryKnob className="mt-[26px] mb-[21px] mx-auto" />
        <div className="row text-xxs w-full mb-[5px] font-semibold all-center">LOOP</div>
        <div className="row mx-auto h-fit relative">
          <div className="col relative h-full all-center mr-[10px]">
            <span className="absolute bg-black w-[20px] h-[1px] top-[28px] right-[-13px]" />
            <span className="absolute bg-black w-[20px] h-[1px] bottom-[17px] right-[-13px]" />
            <span className="absolute bg-black w-[7px] h-[1px] top-[7px]" />
            <span className="absolute bg-black w-[1px] h-[102px] top-[7px]" />
            <span className="absolute bg-black w-[7px] h-[1px] bottom-0" />
            <RedLED className="z-10 mb-[40px] mt-[11px]" />
            <RedLED className="z-10 mt-[12px]" />
          </div>
          <div className="col h-fit z-10">
            <SquareButton label="START" buttonClassName="bg-[#527ef7]" className="mb-[17px]" />
            <SquareButton label="END" buttonClassName="bg-[#527ef7]" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainSectionRight;

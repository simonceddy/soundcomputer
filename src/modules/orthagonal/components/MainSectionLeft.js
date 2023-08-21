import ParamSelectSection from './LeftParamSelectSection';
import RedLED from './RedLED';
import RotaryKnob from './RotaryKnob';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function MainSectionLeft() {
  return (
    <div className="col w-[299px] justify-between h-full items-start pt-[10px]">
      <div className="row justify-between items-center w-full pr-[13px] pl-[18px]">
        <div className="col justify-start items-center h-full">
          <SquareButton label="INSERT" buttonClassName="bg-[#527ef7]" className="mb-[17px]" />
          <SquareButton label="DELETE" buttonClassName="bg-[#527ef7]" className="mb-[17px]" />
          <SquareButton label="MATH" buttonClassName="bg-[#527ef7]" className="" />
        </div>
        <div className="col">
          <RotaryKnob className="mt-[26px] mb-[37px] mx-auto" />
          <div className="row ml-[23px]">
            <SquareButton buttonClassName="bg-[#527ef7]" label="COPY" />
            <div className="col justify-around items-center ml-[2px] pt-[7px]">
              <TextLabel className="text-3xs">press</TextLabel>
              <RedLED />
              <TextLabel className="text-3xs">INSERT</TextLabel>
            </div>
          </div>
        </div>
        <div className="h-full col justify-between items-center">
          <ParamSelectSection className="mb-[17px]" label="TRACK" />
          <ParamSelectSection className="mb-[17px]" label="PATTERN" />
          <ParamSelectSection className="" label="STEP" />
        </div>
      </div>
      <div className="row justify-between items-center border-t border-r border-black rounded-tr-lg w-full pt-[9px] pb-[8px] pr-[13px] pl-[18px]">
        <SquareButton buttonClassName="bg-[#527ef7]" label="LOAD" />
        <SquareButton buttonClassName="bg-[#527ef7]" label="SAVE" />
        <ParamSelectSection label="SNAPSHOT" />
      </div>
    </div>
  );
}

export default MainSectionLeft;

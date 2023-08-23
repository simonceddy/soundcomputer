import Jack8thInch from './Jack8thInch';
import RedLED from './RedLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function ClockSection() {
  return (
    <div className="row relative">
      <div className="col justify-between items-center h-full mr-[13px]">
        <RedLED />
        <TextLabel className="text-3xs">
          PAUSE
        </TextLabel>
        <SquareButton buttonClassName="bg-[#d62122]" />
      </div>
      <div className="col justify-end items-center h-full">
        <TextLabel className="text-xxs">
          CLOCK
        </TextLabel>
        <Jack8thInch connectionId="clock-input-jack" offsetX={5} offsetY={5} />
      </div>
    </div>
  );
}

export default ClockSection;

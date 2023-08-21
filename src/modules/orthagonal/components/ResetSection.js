import Jack8thInch from './Jack8thInch';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function ResetSection() {
  return (
    <div className="row relative mt-[13px]">
      <div className="col justify-end h-full items-center mr-[13px]">
        <SquareButton buttonClassName="bg-[#d62122]" />
      </div>
      <div className="col justify-between items-center h-full">
        <TextLabel className="text-xxs">
          RESET
        </TextLabel>
        <Jack8thInch />
      </div>
    </div>
  );
}

export default ResetSection;

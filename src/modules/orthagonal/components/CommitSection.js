import RedLED from './RedLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';
import ModeSwitch from './ModeSwitch';

function CommitSection() {
  return (
    <div className="col justify-between items-start ml-[21px]">
      <div className="col justify-between items-center">
        <RedLED />
        <TextLabel className="text-3xs">
          COMMIT
        </TextLabel>
        <SquareButton buttonClassName="bg-[#d62122]" />
      </div>
      <ModeSwitch />
    </div>
  );
}

export default CommitSection;

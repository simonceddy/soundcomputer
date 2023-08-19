import RedLED from './RedLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function SmoothButton({ onClick, active = false }) {
  return (
    <div className="row justify-start items-start w-[74px]">
      <SquareButton id="smooth-button" buttonClassName="bg-[#527ef7]" onClick={onClick} />
      <span className="relative col justify-start items-center flex-1">
        <TextLabel className="lowercase">Smooth</TextLabel>
        <span className="border border-black w-[20px] absolute left-0 top-[74%]" />
        <RedLED active={active} className="z-10" />
      </span>
    </div>
  );
}

export default SmoothButton;

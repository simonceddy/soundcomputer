import TextLabel from './TextLabel';
import ThreeWaySwitch from './ThreeWaySwitch';

function ModeSwitch() {
  return (
    <div className="mt-[18px]">
      <div className="row justify-start items-center">
        <TextLabel className="text-xxs">MODE</TextLabel>
      </div>
      <div className="row justify-around items-center">
        <ThreeWaySwitch />
        <div className="col justify-center items-start">
          <TextLabel className="text-3xs border px-1 rounded-lg border-black">hold</TextLabel>
          <TextLabel className="text-3xs pl-1">edit</TextLabel>
          <TextLabel className="text-3xs pl-1">follow</TextLabel>
        </div>
      </div>
    </div>
  );
}

export default ModeSwitch;

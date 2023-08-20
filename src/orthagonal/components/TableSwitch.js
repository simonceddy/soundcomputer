import TextLabel from './TextLabel';
import ThreeWaySwitch from './ThreeWaySwitch';

function TableSwitch() {
  return (
    <div className="w-10 h-10 relative mr-[34px]">
      <div className="row justify-end items-center w-full">
        <TextLabel className="text-xxs mr-1">TABLE</TextLabel>
      </div>
      <div className="row justify-around items-center">
        <div className="col justify-center items-end">
          <TextLabel className="text-3xs">A</TextLabel>
          <TextLabel className="text-3xs">ref</TextLabel>
          <TextLabel className="text-3xs">B</TextLabel>
        </div>
        <ThreeWaySwitch />
      </div>
    </div>
  );
}

export default TableSwitch;

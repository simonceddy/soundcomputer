import RotaryKnob from '../../shared/components/RotaryKnob';

function FineTune() {
  return (
    <div className="row items-center w-11 relative justify-end mb-1">
      <div className="absolute top-0 left-0">
        <span className="text-xs block rotate-[-50deg]">Fine</span>
      </div>
      <RotaryKnob backgroundClass="bg-green-600" radius="25px" />
    </div>
  );
}

export default FineTune;

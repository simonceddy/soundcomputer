import RotaryKnob from '../../../shared/components/RotaryKnob';

function FineTune() {
  return (
    <div className="row items-center w-11 relative justify-start mb-1">
      <div className="absolute top-0 right-0">
        <span className="text-xs block rotate-12">Mod</span>
      </div>
      <RotaryKnob backgroundClass="bg-orange-400" radius="25px" />
    </div>
  );
}

export default FineTune;

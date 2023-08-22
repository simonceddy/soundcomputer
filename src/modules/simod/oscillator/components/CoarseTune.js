import RotaryKnob from '../../shared/components/RotaryKnob';

function CoarseTune() {
  return (
    <div className="col all-center">
      <span className="text-xs">Coarse</span>
      <RotaryKnob backgroundClass="bg-green-400" radius="34px" />
    </div>
  );
}

export default CoarseTune;

import RotaryKnob from '../../components/RotaryKnob/index';

function Encoders() {
  return (
    <div className="flex flex-row justify-between items-center w-11/12">
      <RotaryKnob
        className="h-10 w-10"
      />
      <RotaryKnob
        className="h-10 w-10"
      />
      <RotaryKnob
        className="h-10 w-10"
      />
      <RotaryKnob
        className="h-10 w-10"
      />
    </div>
  );
}

export default Encoders;

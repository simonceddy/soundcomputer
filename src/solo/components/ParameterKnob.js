import RotaryKnob from '../../modules/shared/components/RotaryKnob';

function ParameterKnob({
  label,
  knobBg = 'bg-slate-500',
  maxVal = 3,
  minVal = 0.001,
  id,
  val = 1,
  defaultVal = 1,
  onChange,
  stepSize = 0.01,
  microStepSize,
  megaStepSize
}) {
  return (
    <div className="col justify-end items-center m-1">
      {label && (
        <div className="mx-auto font-digi">{label}</div>
      )}
      <RotaryKnob
        id={id}
        defaultVal={defaultVal}
        val={val}
        backgroundClass={knobBg}
        radius="40px"
        maxVal={maxVal}
        minVal={minVal}
        stepSize={stepSize}
        microStepSize={microStepSize || stepSize / 10}
        megaStepSize={megaStepSize || stepSize * 10}
        onChange={onChange}
      />
    </div>
  );
}

export default ParameterKnob;

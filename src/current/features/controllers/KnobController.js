import RotaryKnob from '../../../modules/shared/components/RotaryKnob';

function KnobController({
  label, value = 0,
  minVal = 0,
  maxVal = 64,
  defaultVal = 0,
  stepSize = 1,
  microStepSize = 1,
  megaStepSize = 12,
  onChange
}) {
  return (
    <div className="my-2 mx-[4%] col all-center">
      <span className="p-0.5 text-teal-300 text-sm w-11 mx-auto text-center mb-1 bg-black font-digi">
        {label}
      </span>
      <RotaryKnob
        minVal={minVal || 0}
        maxVal={maxVal || 64}
        val={value || defaultVal}
        defaultVal={defaultVal || 0}
        stepSize={stepSize || 1}
        microStepSize={microStepSize || 1}
        megaStepSize={megaStepSize}
        onChange={onChange}
        radius="48px"
        backgroundClass="bg-slate-500"
      />
    </div>
  );
}

export default KnobController;

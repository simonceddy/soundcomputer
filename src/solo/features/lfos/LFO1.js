import { useDispatch, useSelector } from 'react-redux';
import ParameterKnob from '../../components/ParameterKnob';
import { setLFO1Frequency } from './lfosSlice';

function LFO1() {
  const { frequency, type } = useSelector((s) => s.lfos.lfo1);
  const dispatch = useDispatch();

  return (
    <div className="p-1 m-1 col all-center rounded-lg bg-orange-400/30">
      <span className="mb-1">
        {type}
      </span>
      <ParameterKnob
        label="Rate"
        val={frequency}
        minVal={0.001}
        maxVal={20}
        stepSize={0.01}
        megaStepSize={1}
        microStepSize={0.001}
        onChange={(v) => dispatch(setLFO1Frequency(v))}
      />
      <span className="m-1 p-1 bg-black text-green-300 font-digi w-20">
        {Number(frequency).toLocaleString('en-US', {
          maximumFractionDigits: 3,
          minimumFractionDigits: 3,
          minimumIntegerDigits: 2
        })}
      </span>
    </div>
  );
}

export default LFO1;

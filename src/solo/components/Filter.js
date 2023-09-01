import { useCallback } from 'react';
import DrawFilter from '../features/filters/DrawFilter';
import ParameterKnob from './ParameterKnob';
import { formatNumber } from '../../current/util';

function displayHz(hz = 1500) {
  return Math.round(hz).toLocaleString('en-US', {
    maximumSignificantDigits: 5,
    minimumIntegerDigits: 5
  });
}

function Filter({
  hz = 700, q = 0.707, type = 'lowpass', onChange = console.log
}) {
  // console.log(type);
  const Drawing = useCallback(() => (
    <DrawFilter hz={hz} q={q} />
  ), [hz, q, type]);
  return (
    <div className="col justify-start items-start m-1 rounded-lg bg-purple-200/50">
      <Drawing />
      <div className="row">
        <div className="col">
          <ParameterKnob
            label="Cutoff"
            maxVal={20000}
            minVal={20}
            megaStepSize={100}
            stepSize={10}
            microStepSize={1}
            val={hz}
            defaultVal={hz}
            onChange={(v) => onChange({ frequency: v })}
          />
          <span className="p-1 bg-black rounded-sm mt-1 font-calc text-green-300">
            {displayHz(hz)}
          </span>
        </div>
        <div className="col">
          <ParameterKnob
            label="Q"
            maxVal={10}
            minVal={0.0001}
            megaStepSize={1}
            stepSize={0.1}
            microStepSize={0.01}
            val={q}
            defaultVal={q}
            onChange={(v) => onChange({ Q: v })}
          />
          <span className="p-1 bg-black rounded-sm mt-1 font-calc text-green-300">
            {formatNumber(q)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filter;

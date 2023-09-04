import { useCallback } from 'react';
import DrawFilter from '../features/filters/DrawFilter';
import ParameterKnob from './ParameterKnob';
import { formatNumber } from '../../current/util';
import CutoffSlider from './CutoffSlider';

function displayHz(hz = 1500) {
  return Math.round(hz).toLocaleString('en-US', {
    // maximumSignificantDigits: 5,
    // minimumIntegerDigits: 5,
    notation: 'compact',
  });
}

function Filter({
  hz = 700, q = 0.707, type = 'lowpass', onChange = console.log, id = 'filter'
}) {
  // console.log(type);
  const Drawing = useCallback(() => (
    <DrawFilter hz={hz} q={q} />
  ), [hz, q, type]);
  return (
    <div className="row justify-start h-fit items-center m-1 rounded-lg bg-purple-200/50">
      <CutoffSlider hz={hz} onChange={onChange} id={id} />
      <div className="col justify-start h-full items-start m-2 rounded-lg bg-purple-200/50">
        <Drawing />
        <div className="col items-center h-full justify-between p-1">
          <div className="row flex-1 h-3/5">
            <span className="py-1 px-2 bg-black row justify-between items-center rounded-sm mt-1 w-16 font-digi text-green-300">
              <span>
                {displayHz(hz)}
              </span>
              <span>
                Hz
              </span>
            </span>
            <ParameterKnob
              label="Mod"
              minVal={-1}
              maxVal={1}
              defaultVal={0}
              val={0}
              stepSize={0.1}
              microStepSize={0.01}
              megaStepSize={1}
            />
          </div>
          <div className="row items-center justify-between p-1 w-full">
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
            <span className="p-1 bg-black w-8 rounded-sm mt-1 font-digi text-green-300">
              {formatNumber(q)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

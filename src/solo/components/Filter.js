/* eslint-disable no-unused-vars */
// import { useCallback } from 'react';
// import DrawFilter from '../features/filters/DrawFilter';
import ParameterKnob from './ParameterKnob';
import { formatNumber } from '../../current/util';
import CutoffSlider from './CutoffSlider';
import RangeSlider from './RangeSlider';

function displayHz(hz = 1500) {
  return Math.round(hz).toLocaleString('en-US', {
    // maximumSignificantDigits: 5,
    // minimumIntegerDigits: 5,
    notation: 'compact',
  });
}

function Filter({
  hz = 700, q = 0.707, type = 'lowpass', onChange = console.log, id = 'filter', modAmt = 0
}) {
  // console.log(type);
  // const Drawing = useCallback(() => (
  //   <DrawFilter hz={hz} q={q} />
  // ), [hz, q, type]);
  return (
    <div className="row justify-start h-full items-center m-1 rounded-lg bg-purple-200/50">
      <CutoffSlider hz={hz} onChange={onChange} id={id} />
      <div className="col justify-start h-full items-start m-2 rounded-lg bg-purple-200/50">
        {/* <Drawing /> */}
        <div className="col items-center h-full justify-between p-1">
          <span className="py-1 px-2 bg-black col justify-between items-center rounded-sm mt-1 w-20 font-digi text-green-300">
            <span className="row w-full justify-between items-center">
              <span>
                {displayHz(hz)}
              </span>
              <span>
                Hz
              </span>
            </span>
            <span className="row justify-between items-center w-full">
              <span>Mod:</span>
              <span>
                {Number(modAmt).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span>
            </span>
          </span>
          <div className="row flex-1 h-3/5">
            <RangeSlider
              label="- Mod +"
              min={-1}
              max={1}
              value={modAmt}
              step={0.01}
              onChange={(e) => {
                onChange({ modAmt: Number(e.target.value) });
              }}
            />
            <button
              type="button"
              className="w-5 h-5 border m-1 rounded-full border-green-400 bg-slate-400 active:bg-yellow-400"
              onClick={() => onChange({ modAmt: 0 })}
            >
              {}
            </button>

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

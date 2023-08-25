/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import RotaryKnob from '../../../modules/shared/components/RotaryKnob';
import { setBpm } from '../app/appSlice';

function Clock() {
  /** @type {number} */
  const bpm = useSelector((s) => s.app.bpm);
  const dispatch = useDispatch();

  return (
    <div className="row justify-between items-center mb-auto mx-2 p-1 rounded-lg bg-sky-500/30">
      <div className="col justify-between h-full items-start mr-2">
        <span className="mb-0.5 text-sm font-digi">
          BPM
        </span>
        <span className="p-1 font-calc text-teal-200 bg-black text-lg">
          {bpm.toLocaleString('en-US', {
            minimumIntegerDigits: 3
          })}
        </span>
      </div>
      <div className="col h-full justify-end items-center">
        <RotaryKnob
          microStepSize={1}
          radius="34px"
          maxVal={400}
          minVal={50}
          val={bpm}
          onChange={(v) => {
            dispatch(setBpm(v));
          }}
        />
      </div>
    </div>
  );
}

export default Clock;

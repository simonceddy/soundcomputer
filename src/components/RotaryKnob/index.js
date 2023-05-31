/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import useRotaryKnob from '../../hooks/useRotaryKnob';

function RotaryKnob({
  onChange,
  id,
  maxDeg = 150,
  maxVal = 100,
  minVal = 0,
  minDeg = -150,
  stepSize = 1,
  microStepSize = 0.1,
  megaStepSize = 3,
  defaultVal = 0,
  val
}) {
  const ref = useRef(null);
  const { state, wheelHandler, dblClickHandler } = useRotaryKnob(ref, {
    maxVal,
    minVal,
    maxDeg,
    defaultVal,
    onChange,
    minDeg,
    stepSize,
    microStepSize,
    megaStepSize,
    val
  });
  console.log(state);
  return (
    <div
      id={id}
      ref={ref}
      onWheel={wheelHandler}
      onDoubleClick={dblClickHandler}
      className="rotary-knob flex flex-col justify-start items-center border-4 border-red-500 bg-blue-800 rounded-full h-28 w-28"
      // style={{ transform: 'rotate(-50deg)' }}
      // style={{ transform: `rotate(${state.deg || 0}deg)` }}
      role="presentation"
    >
      <span id="knob-pointer" className="border-4 border-red-500 h-1/3" />
    </div>
  );
}

export default RotaryKnob;

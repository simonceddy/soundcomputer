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
  val,
  className = 'w-24 h-24',
  bgColour = 'bg-blue-800',
  borderColour = 'border-red-500 active:border-yellow-400',
  borderWidth = 'border-4'
}) {
  const ref = useRef(null);
  const {
    state, dragHandler, wheelHandler, dblClickHandler
  } = useRotaryKnob(ref, {
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

  // console.log(state);
  return (
    <button
      id={id}
      ref={ref}
      onMouseDown={dragHandler}
      onWheel={wheelHandler}
      onDoubleClick={dblClickHandler}
      className={`rotary-knob col justify-start items-center ${borderWidth} ${borderColour} ${bgColour} rounded-full ${className}`}
      // style={{ transform: 'rotate(-50deg)' }}
      style={{ transform: `rotate(${state.deg || 0}deg)` }}
      // role="presentation"
      type="button"
    >
      <span id="knob-pointer" className={`${borderWidth} ${borderColour} h-1/3`} />
    </button>
  );
}

export default RotaryKnob;

import { useRef } from 'react';
import CircleButton from './CircleButton';
import CircleSpan from './CircleSpan';
import './RotaryKnob.css';
import useRotaryKnob from '../hooks/useRotaryKnob';

function RotaryKnob({
  radius = '25px',
  backgroundClass = 'bg-purple-500',
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
}) {
  const ref = useRef(null);
  const {
    wheelHandler, dragHandler, dblClickHandler, state
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

  // console.log(ref);
  return (
    <CircleButton
      id={id}
      ref={ref}
      className={`col all-center rotary-knob border border-slate-700 ${backgroundClass}`}
      style={{
        width: radius,
        height: radius,
        transform: `rotate(${state.deg || 0}deg)`
      }}
      onDoubleClick={dblClickHandler}
      onWheel={wheelHandler}
      onMouseDown={dragHandler}
    >
      <CircleSpan
        className={`rotary-knob-ring relative col items-center justify-start border border-slate-700 ${backgroundClass}`}
        style={{
          width: '90%',
          height: '90%',
        }}
      >
        <span className="absolute rotary-knob-12-marker top-0 w-[25%] h-[25%] rounded-full bg-slate-700" />
      </CircleSpan>
    </CircleButton>
  );
}

export default RotaryKnob;

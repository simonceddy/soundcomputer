/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import CircleDiv from '../../../shared/components/CircleDiv';
import svg from '../assets/red-knob.svg';

function RedRotaryKnob({ className = '', style = {}, startDeg = 0 }) {
  const [rotate, setRotate] = useState(startDeg || 0);
  const ref = useRef(null);

  return (
    <CircleDiv
      ref={ref}
      className={`${className} overflow-hidden flex-nowrap col all-center`}
      style={{
        ...style,
        transform: `rotate(${rotate}deg)`
      }}
      onDragStart={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <img
        alt="knob"
        src={svg}
        className="w-full"
        onDragStart={(e) => {
          e.preventDefault();
        }}
      />
    </CircleDiv>
  );
}

export default RedRotaryKnob;

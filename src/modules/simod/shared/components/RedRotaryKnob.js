import CircleDiv from '../../../shared/components/CircleDiv';
import svg from '../assets/red-knob.svg';

function RedRotaryKnob() {
  return (
    <CircleDiv className="w-12 h-12 overflow-hidden flex-nowrap col all-center">
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

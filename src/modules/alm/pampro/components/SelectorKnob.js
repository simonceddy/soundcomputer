import CircleButton from '../../../shared/components/CircleButton';
import CircleSpan from '../../../shared/components/CircleSpan';
import './SelectorKnob.css';

function SelectorKnob() {
  return (
    <CircleButton
      className="border selector-knob col all-center m-auto cursor-pointer"
      style={{
        width: '64px',
        height: '64px',
        borderColor: '#6c6c6c',
      }}
    >
      <CircleSpan
        className="border selector-knob-ring col all-center"
        style={{
          width: '56px',
          height: '56px',
        }}
      >
        <CircleSpan
          className="border col all-center selector-knob-inner"
          style={{
            width: '46px',
            height: '46px',
            borderColor: '#26739c',
          }}
        />

      </CircleSpan>
    </CircleButton>
  );
}

export default SelectorKnob;

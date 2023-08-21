import CircleButton from '../../../shared/components/CircleButton';
import CircleSpan from '../../../shared/components/CircleSpan';
import './StartButton.css';

function StartButton() {
  return (
    <CircleButton
      className="start-button border border-black col justify-center items-center m-auto"
      style={{
        width: '41px',
        height: '41px',
      }}
      type="button"
    >
      <CircleSpan
        className="col justify-center start-button-inner items-center mx-auto z-10"
        style={{
          width: '31px',
          height: '31px',
        }}
      />
    </CircleButton>
  );
}

export default StartButton;

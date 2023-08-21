import './StartButton.css';

function StartButton() {
  return (
    <button
      className="rounded-full start-button border border-black col justify-center items-center m-auto"
      style={{
        width: '41px',
        height: '41px',
        background: 'linear-gradient(to left, #c78400, #f0c100)'
      }}
      type="button"
    >
      <span
        className="rounded-full col justify-center start-button-inner items-center mx-auto z-10"
        style={{
          width: '31px',
          height: '31px',
        }}
      />
    </button>
  );
}

export default StartButton;

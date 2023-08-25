import './PadButton.css';

function PadButton({
  children, onClick, className = '', id = ''
}) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`w-[50px] h-[50px] rounded-md border-[3px] m-[7px] border-slate-500 hover:border-blue-500 active:border-green-500 px-1 col justify-start items-start text-sm font-calc pad-button ${className}`}
    >
      {children}
    </button>
  );
}

export default PadButton;

import './PadButton.css';

function PadButton({
  children, onClick, className = '', id = ''
}) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 lg:w-10 md:h-9 lg:h-10 xl:h-11 xl:w-11 rounded-md border-4 md:m-1.5 m-1 lg:m-2 border-slate-500 hover:border-blue-500 active:border-green-500 bg-gray-500 pad-button ${className}`}
    >
      {children}
    </button>
  );
}

export default PadButton;

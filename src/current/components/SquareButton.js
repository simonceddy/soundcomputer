function SquareButton({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`${className} w-12 h-12 rounded-md col all-center border-4 border-slate-500 hover:border-blue-400 active:border-green-400 text-base font-digi`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SquareButton;

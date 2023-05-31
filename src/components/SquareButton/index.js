function SquareButton({
  children,
  onClick,
  borderWidth = 'border-2',
  bgColour = 'bg-slate-500',
  borderColour = 'border-slate-300 active:border-yellow-400',
  textColour = 'text-white',
  active = false,
  shiftLabel
}) {
  return (
    <div className={`flex flex-col justify-start items-center relative text-xs font-mono font-thin ${textColour} lowercase`}>
      <span className="h-4 mb-0.5">{shiftLabel}</span>
      <button
        onClick={onClick}
        type="button"
        className={`flex flex-col justify-between items-center ${bgColour} ${borderWidth} ${borderColour} h-12 w-12 rounded-sm`}
      >
        <span className={`w-3 h-2 ${active ? 'bg-red-400' : 'bg-red-950'} my-2`} />
        <span className="mb-1">
          {children}
        </span>
      </button>
    </div>
  );
}

export default SquareButton;

function NormSquareButton({
  children,
  onClick,
  borderWidth = 'border-2',
  bgColour = 'bg-slate-500 active:bg-green-400',
  borderColour = 'border-slate-300 active:border-yellow-400',
  textColour = 'text-white',
  // shiftLabel
}) {
  return (
    <div className={`col justify-start items-center relative text-xs font-mono font-thin ${textColour} lowercase m-1`}>
      {/* <span className="h-4 mb-0.5">{shiftLabel}</span> */}
      <button
        onClick={onClick}
        type="button"
        className={`col all-center ${bgColour} ${borderWidth} ${borderColour} h-12 w-12 rounded-sm`}
      >
        <span className="mb-1 whitespace-pre-wrap">
          {children}
        </span>
      </button>
    </div>
  );
}

export default NormSquareButton;

function ControlButton({
  children, className, onClick, radius = '40px', style = {}
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        width: radius,
        height: radius,
        ...style
      }}
      className={`${className} p-2 rounded-full col all-center border-4 overflow-clip border-slate-500 hover:border-blue-500 active:border-green-500`}
    >
      {children}
    </button>
  );
}

export default ControlButton;

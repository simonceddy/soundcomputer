function NumericalDisplay({ children, characters = 2 }) {
  return (
    <div
      className="h-[33px] border-[#6a3837] border bg-[#560000] rounded-sm"
      style={{
        width: `${characters * 29}px`
      }}
    >
      {children}
    </div>
  );
}

export default NumericalDisplay;

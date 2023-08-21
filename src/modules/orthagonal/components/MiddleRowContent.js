function MiddleRowContent({ children }) {
  return (
    <div className="h-[255px] w-full border-b border-black row justify-between items-start">
      {children}
    </div>
  );
}

export default MiddleRowContent;

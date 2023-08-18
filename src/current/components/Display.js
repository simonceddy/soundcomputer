function Display({ children }) {
  return (
    <div className="w-11/12 mx-auto flex-1 min-h-[50%] my-2 border-2 rounded border-slate-500">
      {children}
    </div>
  );
}

export default Display;

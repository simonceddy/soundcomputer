function DisplayContainer({ children, header }) {
  return (
    <div className="h-40 w-72 rounded bg-slate-300 dark:bg-slate-900 text-blue-900 dark:text-blue-200 font-mono mx-2 mt-2 mb-1 col justify-start items-start">
      <div className="w-full border-b-2 border-slate-900 dark:border-slate-300 font-mono font-bold py-1 row justify-between items-start text-sm">
        {header}
      </div>
      <div className="w-full flex-1 p-1 relative">
        {children}
      </div>
    </div>
  );
}

export default DisplayContainer;

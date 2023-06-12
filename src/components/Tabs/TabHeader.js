function TabHeader({ children }) {
  return (
    <div className="w-full border-b-2 border-slate-900 dark:border-slate-300 font-mono font-bold py-1 row justify-between items-start text-sm mt-2">
      {children}
    </div>
  );
}

export default TabHeader;

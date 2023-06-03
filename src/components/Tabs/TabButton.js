function TabButton({ children, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`hover:underline px-2 py-1 border-r-2 border-slate-300 ${active ? 'bg-slate-900 dark:bg-slate-300 text-blue-200 dark:text-blue-900' : 'bg-slate-300 dark:bg-slate-900 text-blue-900 dark:text-blue-200'}`}
    >
      {children}
    </button>
  );
}

export default TabButton;

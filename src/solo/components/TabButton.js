function TabButton({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-1 font-digi text-lg hover:underline border-y-2 border-slate-400 border-r-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default TabButton;

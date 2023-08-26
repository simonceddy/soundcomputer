function DisplayValueContainer({ children, className = '' }) {
  return (
    <span className={`${className} bg-slate-500/50 py-1 px-2 text-lg"`}>
      {children}
    </span>
  );
}

export default DisplayValueContainer;

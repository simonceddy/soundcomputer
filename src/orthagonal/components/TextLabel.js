function TextLabel({ children, className = '' }) {
  return (
    <span className={`text-xxs font-sans ${className}`}>
      {children}
    </span>
  );
}

export default TextLabel;

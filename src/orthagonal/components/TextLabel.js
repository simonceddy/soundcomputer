function TextLabel({ children, className = 'text-xxs' }) {
  return (
    <span className={`font-sans ${className}`}>
      {children}
    </span>
  );
}

export default TextLabel;

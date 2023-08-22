function TextLabel({ children, className = 'text-xxs' }) {
  return (
    <span className={`font-sans font-semibold ${className}`}>
      {children}
    </span>
  );
}

export default TextLabel;

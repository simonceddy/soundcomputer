function CircleSpan({ children, style = {}, className = '' }) {
  return (
    <span className={`rounded-full ${className}`} style={{ ...style }}>
      {children}
    </span>
  );
}

export default CircleSpan;

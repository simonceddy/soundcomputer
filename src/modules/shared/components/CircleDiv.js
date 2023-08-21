function CircleDiv({ children, style = {}, className = '' }) {
  return (
    <div className={`rounded-full ${className}`} style={{ ...style }}>
      {children}
    </div>
  );
}

export default CircleDiv;

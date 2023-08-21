function CircleButton({
  children, style = {}, className = '', onClick
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full ${className}`}
      style={{ ...style }}
    >
      {children}
    </button>
  );
}

export default CircleButton;

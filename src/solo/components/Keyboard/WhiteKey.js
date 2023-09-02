function WhiteKey({ onMouseDown, onMouseUp }) {
  return (
    <button
      className="white-key border border-slate-500 h-32 w-10"
      type="button"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {}
    </button>
  );
}

export default WhiteKey;

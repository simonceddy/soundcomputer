function BlackKey({ onMouseDown, onMouseUp }) {
  return (
    <button
      className="black-key h-24 w-10 border border-slate-500"
      type="button"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {}
    </button>
  );
}

export default BlackKey;

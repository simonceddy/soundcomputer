function Range({
  value = 0,
  onChange,
  min = 0,
  max = 10,
  step = 1,
  vertical = false,
}) {
  return (
    <input
      className={`focus:border-yellow-400 rounded-full border-slate-400 border-2 m-0.5 ${vertical ? 'range-vertical' : ''}`}
      type="range"
      value={value}
      onChange={onChange}
      max={max}
      min={min}
      step={step}
      aria-orientation={vertical ? 'vertical' : null}
    />
  );
}

export default Range;

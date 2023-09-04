import './RangeSlider.css';

function RangeSlider({
  id,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  value = 0,
  style = {},
  className = '',
  vertical = false,
  label
}) {
  return (
    <label htmlFor={id} className="col max-w-[80px] all-center m-1 p-1">
      {label && <span className="font-digi">{label}</span>}
      <input
        id={id}
        style={{ ...style }}
        className={`${className} ${vertical ? 'range-vertical' : ''}`}
        type="range"
        max={max}
        min={min}
        step={step}
        value={value}
        onChange={onChange}
        aria-orientation={vertical ? 'vertical' : null}
        orient={vertical ? 'vertical' : null}
      />
    </label>
  );
}

export default RangeSlider;

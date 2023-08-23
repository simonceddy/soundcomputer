import './RangeSlider.css';

function RangeSlider({
  id,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  value = 0,
  style = {},
  className = ''
}) {
  return (
    <input
      id={id}
      style={{ ...style }}
      className={`${className}`}
      type="range"
      max={max}
      min={min}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
}

export default RangeSlider;

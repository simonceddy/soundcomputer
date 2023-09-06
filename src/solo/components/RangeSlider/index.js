import './RangeSlider.css';

function RangeSlider({
  id,
  onClick,
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
    <>
      <label
        htmlFor={id}
        className="col max-w-[80px] all-center m-1 p-1"
      >
        {label && (
        <span
          role="presentation"
          className="font-digi select-none"
        >
          {label}
        </span>
        )}
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
      {onClick && (
        <button
          type="button"
          className="w-5 h-5 border m-1 rounded-full border-green-400 bg-slate-400 active:bg-yellow-400"
          onClick={onClick}
        >
          {}
        </button>
      )}
    </>
  );
}

export default RangeSlider;

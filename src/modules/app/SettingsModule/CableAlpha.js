import RangeSlider from '../../shared/components/RangeSlider';

function CableAlpha({ value = 0.7, onChange }) {
  return (
    <label htmlFor="cable-alpha-slider" className="py-2 w-full px-2 col all-center">
      <span className="text-lg font-bold mb-2">
        Cable Opacity
      </span>
      <span className="row justify-between items-center">
        <span className="font-calc text-2xl w-14 row justify-end items-center mr-4">
          {Math.round(value * 100).toLocaleString('en-US', {
            minimumIntegerDigits: 3,
          })}
          <span className="font-mono ml-1 text-xl">
            %
          </span>
        </span>
        <RangeSlider
          className="flex-1 mr-3"
          id="cable-alpha-slider"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={value}
          onChange={onChange}
        />
      </span>
    </label>
  );
}

export default CableAlpha;

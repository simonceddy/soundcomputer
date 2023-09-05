import { scalePow } from 'd3-scale';
import RangeSlider from './RangeSlider';

const min = 20;
const max = 20000;
const step = 0.01;

const scale = scalePow()
  .exponent(4)
  .domain([1, 10])
  .rangeRound([min, max]);
const logStep = 9 / ((max - min) / step);

function CutoffSlider({ hz, onChange, id }) {
  // TODO non-linear cutoff
  // console.log(scale.invert(hz), hz);
  return (
    <RangeSlider
      vertical
      id={`${id}-cutoff-slider`}
      label="Cutoff"
      max={10}
      min={1}
      value={scale.invert(hz)}
      step={logStep}
      onChange={(e) => {
        const newVal = scale(+e.target.value);
        // console.log(newVal);
        onChange({ frequency: newVal });
      }}
    />
  );
}

export default CutoffSlider;

import { useContext, useEffect, useState } from 'react';
import { AudioEngineContext } from '../../audio';
import RangeSlider from '../../components/RangeSlider';

function Output() {
  /** @type {import('../../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);

  const [gain, setGain] = useState(engine.output.gain.value || 0.5);

  useEffect(() => {
    engine.output.gain.setValueAtTime(gain, engine.currentTime);
  }, [gain]);

  return (
    <div>
      <RangeSlider
        vertical
        label="Volume"
        max={1}
        min={0}
        value={gain}
        step={0.01}
        onChange={(e) => {
          setGain(Number(e.target.value));
        }}
      />
    </div>
  );
}

export default Output;

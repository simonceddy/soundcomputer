/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AudioEngineContext } from '../../audio';
import RangeSlider from '../../components/RangeSlider';
import {
  setOscillator2Gain,
  setOscillator2Type
} from './oscillatorsSlice';
import VolIcon from '../../components/icons/VolIcon';

function Oscillator2() {
  const {
    type, gain
  } = useSelector((s) => s.oscillators.oscillator2);
  /** @type {import('../../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);
  const dispatch = useDispatch();

  useEffect(() => {
    engine.basicOscillator.node.type = type;
  }, [type]);
  useEffect(() => {
    engine.basicOscillator.gain.setValueAtTime(gain, engine.currentTime + 0.005);
  }, [gain]);

  return (
    <div>
      <div className="row justify-around h-full items-center p-1 m-1 text-white rounded-lg bg-blue-700/50">

        {type}
        {/* Waveform levels */}
        <RangeSlider
          label={<VolIcon size={26} />}
          min={0}
          step={0.001}
          max={1}
          value={gain}
          vertical
          onChange={(e) => {
            dispatch(setOscillator2Gain(Number(e.target.value)));
          }}
        />
      </div>
    </div>
  );
}

export default Oscillator2;

/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AudioEngineContext } from '../../audio';
import RangeSlider from '../../components/RangeSlider';
import {
  sine, saw, tri, pulse
} from '../../assets';
import {
  setOscillator1SawGain,
  setOscillator1SineGain,
  setOscillator1SquareGain,
  setOscillator1TriGain
} from './oscillatorsSlice';

function Oscillator1() {
  const {
    sineGain, triGain, sawGain, squareGain, master
  } = useSelector((s) => s.oscillators.oscillator1);
  /** @type {import('../../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);
  const dispatch = useDispatch();

  useEffect(() => {
    engine.complexOscillator.sineGain.gain.setValueAtTime(sineGain, engine.currentTime + 0.005);
  }, [sineGain]);
  useEffect(() => {
    engine.complexOscillator.triangleGain.gain.setValueAtTime(triGain, engine.currentTime + 0.005);
  }, [triGain]);
  useEffect(() => {
    engine.complexOscillator.sawtoothGain.gain.setValueAtTime(sawGain, engine.currentTime + 0.005);
  }, [sawGain, squareGain]);
  useEffect(() => {
    engine.complexOscillator.squareGain.gain.setValueAtTime(squareGain, engine.currentTime + 0.005);
  }, [squareGain]);

  return (
    <div>
      <div className="row justify-around items-center p-1 m-1">

        {}
        {/* Waveform levels */}
        <RangeSlider
          label={<img className="m-1" width={20} height={20} src={sine} alt="sine" />}
          min={0}
          step={0.001}
          max={1}
          value={sineGain}
          vertical
          onChange={(e) => {
            dispatch(setOscillator1SineGain(Number(e.target.value)));
          }}
        />
        <RangeSlider
          label={<img className="m-1" width={20} height={20} src={tri} alt="tri" />}
          min={0}
          step={0.001}
          max={1}
          value={triGain}
          vertical
          onChange={(e) => {
            dispatch(setOscillator1TriGain(Number(e.target.value)));
          }}
        />
        <RangeSlider
          label={<img className="m-1" width={20} height={20} src={saw} alt="saw" />}
          min={0}
          step={0.001}
          max={1}
          value={sawGain}
          vertical
          onChange={(e) => {
            dispatch(setOscillator1SawGain(Number(e.target.value)));
          }}
        />
        <RangeSlider
          label={<img className="m-1" width={20} height={20} src={pulse} alt="pulse" />}
          min={0}
          step={0.001}
          max={1}
          value={squareGain}
          vertical
          onChange={(e) => {
            dispatch(setOscillator1SquareGain(Number(e.target.value)));
          }}
        />
      </div>
    </div>
  );
}

export default Oscillator1;

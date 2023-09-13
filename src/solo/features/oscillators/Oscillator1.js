/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AudioEngineContext } from '../../audio';
import RangeSlider from '../../components/RangeSlider';
import {
  sine, saw, tri, pulse
} from '../../assets';
import {
  setOscillator1MasterGain,
  setOscillator1SawGain,
  setOscillator1SineGain,
  setOscillator1SquareGain,
  setOscillator1TriGain
} from './oscillatorsSlice';
import VolIcon from '../../components/icons/VolIcon';

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
  useEffect(() => {
    engine.complexOscillator.outputGain.gain.setValueAtTime(master, engine.currentTime + 0.005);
  }, [master]);

  return (
    <div>
      <div className="row justify-around h-full items-center p-1 m-1 text-white rounded-lg bg-blue-700/50">

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
        <RangeSlider
          label={<VolIcon size={26} />}
          min={0}
          step={0.001}
          max={1}
          value={master}
          vertical
          onChange={(e) => {
            dispatch(setOscillator1MasterGain(Number(e.target.value)));
          }}
        />
      </div>
    </div>
  );
}

export default Oscillator1;

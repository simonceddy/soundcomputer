/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import Filter from '../../components/Filter';
import { updateFilter1 } from './filtersSlice';
import { AudioEngineContext } from '../../audio';

function Filter1() {
  /** @type {import('../../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);
  const {
    type, Q, bypass, frequency, modAmt
  } = useSelector((s) => s.filters.filter1);
  const dispatch = useDispatch();
  // console.log(engine.filter1.frequency);

  useEffect(() => {
    engine.setFilter1Hz(frequency);
  }, [frequency]);

  useEffect(() => {
    engine.filter1.Q.linearRampToValueAtTime(Q, engine.currentTime + 0.01);
  }, [Q]);

  return (
    <Filter
      modAmt={modAmt}
      onChange={(v) => {
        dispatch(updateFilter1(v));
      }}
      type={type}
      q={Q}
      hz={frequency}
    />
  );
}

export default Filter1;

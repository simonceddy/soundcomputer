/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import Filter from '../../components/Filter';
import { updateFilter2 } from './filtersSlice';
import { AudioEngineContext } from '../../audio';

function Filter2() {
  /** @type {import('../../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);
  const {
    type, Q, bypass, frequency, modAmt
  } = useSelector((s) => s.filters.filter2);
  const dispatch = useDispatch();
  // console.log(engine);

  useEffect(() => {
    engine.setFilter2Hz(frequency);
  }, [frequency]);

  useEffect(() => {
    engine.filter2.Q.linearRampToValueAtTime(Q, engine.currentTime + 0.01);
  }, [Q]);

  return (
    <Filter
      modAmt={modAmt}
      onChange={(v) => {
        dispatch(updateFilter2(v));
      }}
      type={type}
      q={Q}
      hz={frequency}
    />
  );
}

export default Filter2;

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
    type, Q, bypass, frequency
  } = useSelector((s) => s.filters.filter2);
  const dispatch = useDispatch();
  // console.log(engine);

  useEffect(() => {
    engine.filter2.frequency.linearRampToValueAtTime(frequency, engine.currentTime + 0.01);
  }, [frequency]);

  return (
    <Filter
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

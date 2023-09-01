/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter';
import { updateFilter1 } from './filtersSlice';

function Filter1() {
  const {
    type, Q, bypass, frequency
  } = useSelector((s) => s.filters.filter1);
  const dispatch = useDispatch();
  return (
    <Filter
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

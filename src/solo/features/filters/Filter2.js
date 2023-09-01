/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter';
import { updateFilter2 } from './filtersSlice';

function Filter2() {
  const {
    type, Q, bypass, frequency
  } = useSelector((s) => s.filters.filter2);
  const dispatch = useDispatch();
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

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import RotaryKnob from '../../../modules/shared/components/RotaryKnob';
import PageSelector from './PageSelector';
import Transport from '../transport';
import Clock from '../clock';

function Controls() {
  const dispatch = useDispatch();
  return (
    <div className="row w-full justify-start items-center px-6 mt-3 mb-3">
      <Clock />
      <Transport />
      <PageSelector />
    </div>
  );
}

export default Controls;

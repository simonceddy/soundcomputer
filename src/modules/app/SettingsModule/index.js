/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import { setCableAlpha } from '../settingsSlice';
import RangeSlider from '../../shared/components/RangeSlider';
import CableAlpha from './CableAlpha';
import PatchingState from './PatchingState';

function SettingsModule() {
  const dispatch = useDispatch();
  const { cableAlpha } = useSelector((s) => s.settings);
  return (
    <Layout>
      <h3 className="text-3xl font-bold underline mt-2 font-mono">Settings</h3>
      <PatchingState />
      <CableAlpha
        value={cableAlpha}
        onChange={(e) => {
          dispatch(setCableAlpha(e.target.value));
        }}
      />
    </Layout>
  );
}

export default SettingsModule;

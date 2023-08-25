/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import ControlButton from '../../components/ControlButton';
import { setSelectedTrack } from '../tracks/tracksSlice';
import { setAppMode } from '../app/appSlice';
import {
  APP_MODE_FLTR,
  APP_MODE_FX,
  APP_MODE_INSTR,
  APP_MODE_MIX,
  APP_MODE_MODS,
  APP_MODE_SEQ,
  APP_MODE_STEP
} from '../app/support';

const rightButtons = [
  { key: APP_MODE_SEQ, className: 'bg-blue-400', label: 'seq' },
  { key: APP_MODE_STEP, className: 'bg-green-400', label: 'step' },
  { key: APP_MODE_INSTR, className: 'bg-yellow-400', label: 'instr' },
  { key: APP_MODE_FLTR, className: 'bg-red-400', label: 'fltr' },
  { key: APP_MODE_MODS, className: 'bg-violet-400', label: 'mods' },
  { key: APP_MODE_FX, className: 'bg-orange-400', label: 'fx' },
  { key: APP_MODE_MIX, className: 'bg-cyan-400', label: 'mixer' },
  // { key: 8, className: 'bg-lime-400', label: '' },
];

function RightColButtons() {
  const appMode = useSelector((s) => s.app.appMode);
  const dispatch = useDispatch();
  return (
    <div className="col justify-around h-full items-center p-2 ml-4">
      {rightButtons.map(({ key, className, label }) => (
        <ControlButton
          onClick={() => dispatch(setAppMode(key))}
          radius="45px"
          className={`m-1.5 ${appMode === key ? className : 'bg-gray-600'} text-sm text-white font-digi`}
          key={`left-col-button-${key}`}
        >
          {label}
        </ControlButton>
      ))}
    </div>
  );
}

export default RightColButtons;

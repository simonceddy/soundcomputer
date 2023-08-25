/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import ControlButton from '../../components/ControlButton';
import { setSelectedTrack } from '../tracks/tracksSlice';

const rightButtons = [
  { key: 1, className: 'active:bg-blue-400', label: 'seq' },
  { key: 2, className: 'active:bg-green-400', label: '' },
  { key: 3, className: 'active:bg-yellow-400', label: '' },
  { key: 4, className: 'active:bg-red-400', label: '' },
  { key: 5, className: 'active:bg-violet-400', label: '' },
  { key: 6, className: 'active:bg-orange-400', label: '' },
  { key: 7, className: 'active:bg-cyan-400', label: '' },
  { key: 8, className: 'active:bg-lime-400', label: '' },
];

function RightColButtons() {
  const dispatch = useDispatch();
  return (
    <div className="col justify-start items-center p-2 ml-4">
      {rightButtons.map(({ key, className, label }) => (
        <ControlButton
          radius="45px"
          className={`m-1.5 ${className} bg-gray-600 text-sm text-white font-digi`}
          key={`left-col-button-${key}`}
        >
          {label}
        </ControlButton>
      ))}
    </div>
  );
}

export default RightColButtons;

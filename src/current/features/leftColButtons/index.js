import { useDispatch, useSelector } from 'react-redux';
import ControlButton from '../../components/ControlButton';
import { setSelectedTrack } from '../tracks/tracksSlice';

const leftButtons = [
  { key: 1, className: 'bg-blue-400' },
  { key: 2, className: 'bg-green-400' },
  { key: 3, className: 'bg-yellow-400' },
  { key: 4, className: 'bg-red-400' },
  { key: 5, className: 'bg-violet-400' },
  { key: 6, className: 'bg-orange-400' },
  { key: 7, className: 'bg-cyan-400' },
  { key: 8, className: 'bg-lime-400' },
];

function LeftColButtons() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const dispatch = useDispatch();
  return (
    <div className="col justify-start items-center p-2 mr-4">
      {leftButtons.map(({ key, className }) => (
        <ControlButton
          radius="45px"
          className={`m-1.5 ${selectedTrackKey === key ? `${className} text-black` : 'bg-gray-600 text-white'} font-calc`}
          onClick={() => dispatch(setSelectedTrack(key))}
          key={`left-col-button-${key}`}
        >
          {key}
        </ControlButton>
      ))}
    </div>
  );
}

export default LeftColButtons;

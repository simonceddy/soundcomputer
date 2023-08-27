import { useDispatch, useSelector } from 'react-redux';
import ControlButton from '../../components/ControlButton';
import { togglePlaying } from '../app/appSlice';

function Transport({ resetFn }) {
  const playing = useSelector((s) => s.app.playing);
  const dispatch = useDispatch();
  return (
    <div className="row justify-between items-center p-2 m-2">
      <ControlButton
        radius="48px"
        onClick={() => dispatch(togglePlaying())}
        className={`${playing ? 'bg-green-300' : 'bg-gray-400'} text-black text-lg m-2`}
      >
        ᐅ
      </ControlButton>
      <ControlButton
        onClick={resetFn}
        radius="48px"
        className="bg-yellow-400 text-black text-lg m-2"
      >
        ↺
      </ControlButton>
    </div>
  );
}

export default Transport;

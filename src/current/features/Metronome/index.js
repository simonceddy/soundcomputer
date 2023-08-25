import { useDispatch, useSelector } from 'react-redux';
import CircleSpan from '../../../modules/shared/components/CircleSpan';
import ControlButton from '../../components/ControlButton';
import { toggleMetronome } from '../app/appSlice';

function Metronome() {
  const metronomeActive = useSelector((s) => s.app.metronomeActive);
  const dispatch = useDispatch();
  return (
    <div className="row justify-between items-center mx-2 p-2 mb-auto rounded-lg bg-sky-400/30">
      <CircleSpan className="w-5 h-5 m-2 bg-gray-200" />
      <ControlButton
        onClick={() => dispatch(toggleMetronome())}
        className={`text-2xl mr-2 ${metronomeActive ? 'bg-green-600' : 'bg-slate-500'}`}
      >
        <span className="mx-auto">
          ⍎
        </span>
      </ControlButton>
    </div>
  );
}

export default Metronome;

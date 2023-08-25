import { useDispatch, useSelector } from 'react-redux';
import { PiMetronome } from 'react-icons/pi';
import CircleSpan from '../../../modules/shared/components/CircleSpan';
import { toggleMetronome } from '../app/appSlice';
import SquareButton from '../../components/SquareButton';

function Metronome() {
  const metronomeActive = useSelector((s) => s.app.metronomeActive);
  const dispatch = useDispatch();
  return (
    <div className="row justify-between items-center mx-2 p-2 mb-auto rounded-lg bg-sky-400/30">
      <CircleSpan className="w-5 h-5 m-2 bg-gray-200" />
      <SquareButton
        onClick={() => dispatch(toggleMetronome())}
        className={`text-2xl w-8 h-8 mr-2 ${metronomeActive ? 'bg-green-600' : 'bg-slate-500'}`}
      >
        <span className="mx-auto">
          <PiMetronome size={26} />
        </span>
      </SquareButton>
    </div>
  );
}

export default Metronome;

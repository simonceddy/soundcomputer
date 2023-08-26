import { PiFloppyDisk } from 'react-icons/pi';
import { FaCog, FaQuestionCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import SquareButton from '../../components/SquareButton';
import { APP_MODE_MAN } from '../app/support';
import { setAppMode } from '../app/appSlice';

function SystemControls() {
  const appMode = useSelector((s) => s.app.appMode);
  const dispatch = useDispatch();

  return (
    <div className="row">
      <SquareButton className="bg-yellow-600 text-black mx-2 active:bg-yellow-300">
        <PiFloppyDisk size={22} />
      </SquareButton>
      <SquareButton className="bg-slate-600 text-white mx-2 active:bg-green-500">
        <FaCog size={22} />
      </SquareButton>
      <SquareButton
        className={`${appMode === APP_MODE_MAN ? 'bg-green-700' : 'bg-slate-600'} text-white mx-2 active:bg-green-500`}
        onClick={() => {
          if (appMode !== APP_MODE_MAN) {
            dispatch(setAppMode(APP_MODE_MAN));
          }
        }}
      >
        <FaQuestionCircle size={22} />
      </SquareButton>
    </div>
  );
}

export default SystemControls;

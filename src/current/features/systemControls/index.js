import { PiFloppyDisk } from 'react-icons/pi';
import { FaCog } from 'react-icons/fa';
import SquareButton from '../../components/SquareButton';

function SystemControls() {
  return (
    <div className="row">
      <SquareButton className="bg-yellow-600 text-black mx-2 active:bg-yellow-300">
        <PiFloppyDisk size={22} />
      </SquareButton>
      <SquareButton className="bg-slate-600 text-white mx-2 active:bg-green-500">
        <FaCog size={22} />
      </SquareButton>
    </div>
  );
}

export default SystemControls;

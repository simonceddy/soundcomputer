import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import RotaryKnob from '../RotaryKnob';
import { setSongTempo } from '../../features/song/songSlice';
import { formatTempo } from '../../util';

function Bpm() {
  const { tempo } = useSelector((s) => s.song.present);
  const dispatch = useDispatch();
  return (
    <div className="row justify-between items-center w-52 m-2 p-2 border-2 border-teal-500 rounded">
      <RotaryKnob
        className="w-16 h-16"
        minVal={30}
        maxVal={300}
        onChange={throttle((v) => dispatch(setSongTempo(v)), 50)}
        val={tempo}
        megaStepSize={5}
        defaultVal={120}
      />
      <span className="font-bold font-mono text-2xl p-2 border-2 border-teal-400 m-1 italic bg-black rounded-sm">
        {formatTempo(tempo)}
      </span>
    </div>
  );
}

export default Bpm;

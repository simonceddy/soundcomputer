import { useDispatch, useSelector } from 'react-redux';
import RotaryKnob from '../RotaryKnob';
import { setSongTempo } from '../../features/song/songSlice';
import { formatTempo } from '../../util';

function Bpm() {
  const { tempo } = useSelector((s) => s.song);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center w-52 m-2 p-2 border-2 border-teal-500 rounded">
      <RotaryKnob
        className="w-16 h-16"
        minVal={30}
        maxVal={300}
        onChange={(v) => dispatch(setSongTempo(v))}
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

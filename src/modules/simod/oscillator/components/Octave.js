import { useState } from 'react';
// import RotaryKnob from '../../shared/components/RotaryKnob';

function Octave() {
  const [octave, setOctave] = useState(0);
  return (
    <div className="col all-center w-12 p-1 rounded-lg bg-sky-400/30">
      {/* <RotaryKnob radius="20px" backgroundClass="bg-green-600" /> */}
      <span className="text-xs font-digi italic rotate-2 mb-0.5">OCTAVE</span>
      <input
        className="octave-slider w-full"
        type="range"
        min={-2}
        max={2}
        list="octaves"
        value={octave}
        onChange={(e) => setOctave(Number(e.target.value))}
      />
      <datalist id="octaves" className="w-[40px] mx-auto font-digi row justify-between items-center text-xxs">
        <option value={-2} label="-2" />
        <option value={-1} label="-1" />
        <option value={0} label="0" />
        <option value={1} label="+1" />
        <option value={2} label="+2" />
      </datalist>
    </div>
  );
}

export default Octave;

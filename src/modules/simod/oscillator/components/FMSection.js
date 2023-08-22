import { useState } from 'react';
import CircleButton from '../../../shared/components/CircleButton';
import CircleSpan from '../../../shared/components/CircleSpan';
import RotaryKnob from '../../shared/components/RotaryKnob';
import FMInputs from './FMInputs';

function fmTypeBg(type = 0) {
  switch (type) {
    case 1:
      return 'bg-red-400';
    case 2:
      return 'bg-blue-400';
    case 3:
      return 'bg-purple-400';
    case 0:
    default:
      return 'bg-slate-400';
  }
}

function FMSection() {
  const [crossModToggled, setCrossModToggled] = useState(false);
  const [fmType, setFmType] = useState(0);
  // console.log(fmType);
  const setType = (e) => {
    if (e.shiftKey) setFmType(fmType > 0 ? fmType - 1 : 3);
    else setFmType((fmType + 1) % 4);
  };
  return (
    <div className="row w-[88%] justify-between items-center my-2 p-1 rounded-lg bg-lime-400/20">
      <FMInputs />
      <div className="col all-center mx-1">
        <span className="text-xxs font-semibold text-slate-400">E|E</span>
        <span className="text-xxs font-semibold text-red-400">L|E</span>
        <span className="text-xxs font-semibold text-blue-400">E|L</span>
        <span className="text-xxs font-semibold text-purple-400 mb-0.5">L|L</span>
        <CircleButton
          className={`w-4 h-4 ${fmTypeBg(fmType)} border border-slate-700 active:border-violet-700`}
          onClick={setType}
        />
      </div>
      <div className="row items-center justify-between py-1 px-2 rounded-lg bg-purple-500/30 w-[55%]">
        <div className="col all-center">
          <RotaryKnob radius="34px" backgroundClass="bg-red-400" />
          <span className="text-sm font-semibold -rotate-12">
            FM1
          </span>
        </div>
        <div className="col all-center p-1 rounded-lg bg-green-400/30 mx-1">
          <CircleSpan
            className={`${crossModToggled ? 'bg-orange-400' : 'bg-slate-600'} w-2 h-2 mb-1`}
          />
          <CircleButton
            className="w-4 h-4 bg-blue-300 border border-slate-700 active:border-violet-700"
            onClick={() => setCrossModToggled(!crossModToggled)}
          />
          <span className="text-lg">
            ⤧
          </span>
        </div>
        <div className="col all-center">
          <RotaryKnob radius="34px" backgroundClass="bg-blue-400" />
          <span className="text-sm font-semibold rotate-12">
            FM2
          </span>
        </div>
      </div>
    </div>
  );
}

export default FMSection;

import MiniJack from '../../shared/components/MiniJack';
import RedRotaryKnob from '../../shared/components/RedRotaryKnob';
import pwmthin from '../assets/pwm-thin.svg';
import pwmfat from '../assets/pwm-fat.svg';

function PWMSection() {
  return (
    <div className="row w-[88%] justify-between items-center my-2 p-1 rounded-lg bg-blue-400/20">
      <div
        className="row justify-between bg-lime-200/20 rounded-lg p-1 items-center w-[61px]"
      >
        <span className="text-xs font-bold">
          PWM
        </span>
        <MiniJack className="bg-pink-400" />
      </div>
      <div className="col all-center">
        <span className="text-xs italic rotate-3 font-bold mt-0.5">
          Mod
        </span>
        <RedRotaryKnob className="w-8 h-8" />
      </div>
      <div className="col all-center rounded-lg bg-slate-500/40 py-2 px-1">
        <RedRotaryKnob className="w-12 h-12" />
        <span className="text-base -rotate-3 font-bold mt-0.5 row justify-between items-center">
          <img src={pwmthin} alt="pwm-thin" width={15} height={15} className="mr-1" />
          ⬌
          <img src={pwmfat} alt="pwm-thin" width={15} height={15} className="ml-1" />
        </span>
      </div>
    </div>
  );
}

export default PWMSection;

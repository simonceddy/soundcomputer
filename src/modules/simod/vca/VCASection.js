import MiniJack from '../shared/components/MiniJack';
import RotaryKnob from '../../shared/components/RotaryKnob';

function VCASection({
  id = 1,
  bgClass = 'bg-slate-500',
  sectionBgClass = 'bg-slate-500/30',
  trailingArrow = false
}) {
  return (
    <>
      <div className={`w-[88%] row justify-evenly items-center z-10 my-0.5 p-0.5 ${sectionBgClass}`}>
        <span className="text-sm font-bold">{id}</span>
        <div className="col all-center">
          <span className="text-xs font-bold mb-0.5">In</span>
          <MiniJack className={`${bgClass}`} />
        </div>
        <div className="row all-center">
          <RotaryKnob radius="35px" backgroundClass={`${bgClass}`} />
          <div className="col all-center ml-1.5">
            <span className="text-xs font-bold mb-0.5">CV</span>
            <MiniJack className={`${bgClass}`} />
          </div>
        </div>
        <RotaryKnob radius="45px" backgroundClass={`${bgClass}`} />
      </div>
      {trailingArrow && (
        <span className="text-2xl text-cyan-100 w-[64%] my-0.5 text-right">▼</span>
      )}
    </>
  );
}

export default VCASection;

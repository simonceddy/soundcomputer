import RotaryKnob from '../../shared/components/RotaryKnob';
import MiniJack from '../shared/components/MiniJack';

function IOSection({ backgroundClass = 'bg-green-400', id = 1, sectionBgClass = 'bg-green-400/20' }) {
  return (
    <div className={`col justify-center items-center w-[88%] my-0.5 py-0.5 z-10 rounded-lg ${sectionBgClass}`}>
      <RotaryKnob backgroundClass={backgroundClass} radius="34px" />
      <div className="row justify-between items-center w-3/4">
        <div className="col justify-between items-center">
          <span className="text-xxs font-bold font-mono">
            In
          </span>
          <MiniJack className={`${backgroundClass}`} connectionId={`attenuverter-input-${id}`} />
        </div>
        <div className="col justify-between items-center">
          <span className="text-xxs font-bold font-mono">
            Out
          </span>
          <MiniJack className={`${backgroundClass}`} connectionId={`attenuverter-output-${id}`} />
        </div>
      </div>
    </div>
  );
}

export default IOSection;

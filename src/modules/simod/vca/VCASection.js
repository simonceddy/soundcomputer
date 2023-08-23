import MiniJack from '../shared/components/MiniJack';
import RotaryKnob from '../../shared/components/RotaryKnob';

function VCASection() {
  return (
    <div className="w-[88%] row justify-evenly items-center my-1">
      <MiniJack />
      <RotaryKnob radius="35px" />
      <MiniJack />
      <RotaryKnob radius="45px" />
    </div>
  );
}

export default VCASection;

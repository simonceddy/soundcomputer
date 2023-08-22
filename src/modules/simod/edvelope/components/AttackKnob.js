import MiniJack from '../../shared/components/MiniJack';
import RotaryKnob from '../../../shared/components/RotaryKnob';
import KnobSection from './KnobSection';

function AttackKnob() {
  return (
    <KnobSection>
      <span className="font-digi text-lg rotate-[-30deg] absolute block top-[-6px] left-[-4px] text-yellow-700/50 italic">Attack</span>
      <span id="attack-label" className="font-digi text-lg rotate-[-27deg] absolute block top-0 left-0 text-yellow-400 italic">Attack!</span>
      <MiniJack className="bg-yellow-600 absolute bottom-[-3px] left-2" />
      <RotaryKnob backgroundClass="bg-yellow-400" radius="40px" />
    </KnobSection>
  );
}

export default AttackKnob;

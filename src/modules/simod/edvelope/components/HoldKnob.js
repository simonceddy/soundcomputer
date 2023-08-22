import MiniJack from '../../shared/components/MiniJack';
import RotaryKnob from '../../../shared/components/RotaryKnob';
import KnobSection from './KnobSection';

function HoldKnob() {
  return (
    <KnobSection>
      <span className="font-digi text-lg rotate-[-30deg] absolute block top-[-6px] left-[-4px] text-cyan-600/50 italic">Hold</span>
      <span id="hold-label" className="font-digi text-lg rotate-[-27deg] absolute block top-0 left-0 text-cyan-400 italic">Hold!</span>
      <MiniJack className="bg-cyan-600 absolute bottom-[-3px] left-2" />
      <RotaryKnob backgroundClass="bg-cyan-400" radius="40px" />
    </KnobSection>
  );
}

export default HoldKnob;

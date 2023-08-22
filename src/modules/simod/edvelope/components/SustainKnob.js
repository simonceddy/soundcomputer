import MiniJack from '../../shared/components/MiniJack';
import RotaryKnob from '../../shared/components/RotaryKnob';
import KnobSection from './KnobSection';

function SustainKnob() {
  return (
    <KnobSection>
      <span className="font-digi text-lg rotate-[-30deg] absolute block top-[-6px] left-[-4px] text-teal-700/50 italic">Sustain</span>
      <span id="sustain-label" className="font-digi text-lg rotate-[-27deg] absolute block top-0 left-0 text-teal-400 italic">Sustain!</span>
      <MiniJack className="bg-teal-600 absolute bottom-[-3px] left-2" />
      <RotaryKnob backgroundClass="bg-teal-400" radius="40px" />
    </KnobSection>
  );
}

export default SustainKnob;

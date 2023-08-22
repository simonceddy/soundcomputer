import MiniJack from '../../shared/components/MiniJack';
import RotaryKnob from '../../shared/components/RotaryKnob';
import KnobSection from './KnobSection';

function DecayKnob() {
  return (
    <KnobSection>
      <span className="font-digi text-lg rotate-[-30deg] absolute block top-[-6px] left-[-4px] text-red-700/50 italic">Decay</span>
      <span id="decay-label" className="font-digi text-lg rotate-[-27deg] absolute block top-0 left-0 text-pink-400 italic">Decay!</span>
      <MiniJack className="bg-pink-600 absolute bottom-[-3px] left-2" />
      <RotaryKnob backgroundClass="bg-pink-400" radius="40px" />
    </KnobSection>
  );
}

export default DecayKnob;

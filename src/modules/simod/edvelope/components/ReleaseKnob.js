import MiniJack from '../../shared/components/MiniJack';
import RotaryKnob from '../../shared/components/RotaryKnob';
import KnobSection from './KnobSection';

function ReleaseKnob() {
  return (
    <KnobSection>
      <span className="font-digi text-lg rotate-[-30deg] absolute block top-[-6px] left-[-4px] text-purple-600/50 italic">Release</span>
      <span id="release-label" className="font-digi text-lg rotate-[-27deg] absolute block top-0 left-0 text-violet-400 italic">Release!</span>
      <MiniJack className="bg-violet-600 absolute bottom-[-3px] left-2" />
      <RotaryKnob backgroundClass="bg-violet-400" radius="40px" />
    </KnobSection>
  );
}

export default ReleaseKnob;

import { useCallback } from 'react';
import EnvelopeSection from './EnvelopeSection';
import ParameterKnob from './ParameterKnob';
import DrawADSR from '../features/envelopes/DrawADSR';

const defaultADSR = {
  attack: 0.1,
  decay: 0.1,
  sustain: 0.1,
  release: 0.1,
};

function Envelope({ onChange = console.log, adsr = defaultADSR, title = 'Envelope' }) {
  const Drawing = useCallback(() => (
    <DrawADSR
      attack={adsr.attack}
      decay={adsr.decay}
      sustain={adsr.sustain}
      release={adsr.release}
    />
  ), [adsr]);
  return (
    <EnvelopeSection>
      <span className="font-digi rounded-t-lg mb-2 text-xl w-full pb-0.5 px-0.5 bg-black text-blue-200">{title}</span>
      <Drawing />
      <div className="row justify-start items-start p-2">
        <ParameterKnob
          onChange={(v) => {
            // console.log(v);
            onChange({
              attack: Number(v)
            });
          }}
          val={adsr.attack}
          label="Attack"
        />
        <ParameterKnob
          label="Decay"
          onChange={(v) => {
            // console.log(v);
            onChange({
              decay: Number(v)
            });
          }}
          val={adsr.decay}
        />
        <ParameterKnob
          label="Sustain"
          minVal={0}
          maxVal={1}
          onChange={(v) => {
            // console.log(v);
            onChange({
              sustain: Number(v)
            });
          }}
          val={adsr.sustain}
        />
        <ParameterKnob
          maxVal={30}
          label="Release"
          onChange={(v) => {
            // console.log(v);
            onChange({
              release: Number(v)
            });
          }}
          val={adsr.release}
        />
      </div>
    </EnvelopeSection>
  );
}

export default Envelope;

import { useContext } from 'react';
import { midiToNoteName } from '@tonaljs/midi';
import { useSelector } from 'react-redux';
import { AudioEngineContext } from '../audio';
import { BlackKey, WhiteKey } from '../components/Keyboard';

const keys = [
];
const startOctave = 2;
(new Int8Array(24)).forEach((_v, id) => {
  const note = (startOctave * 12) + id;
  const noteName = midiToNoteName(note, { sharps: true });
  keys.push({
    note,
    noteName,
    flat: noteName[1] === '#'
  });
});

function Keyboard() {
  /** @type {import('../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);

  const env = useSelector((s) => s.envelopes.envelope1);
  const filter1ModAmt = useSelector((s) => s.filters.filter1.modAmt);
  console.log(filter1ModAmt);
  return (
    <div className="flex-1 row justify-start items-start">
      {keys.map(({ note, flat }, id) => (flat ? (
        <BlackKey
          key={`keyboard-key-${id}`}
          onMouseDown={() => {
            engine.noteOn(note, env);
          }}
          onMouseUp={() => {
            engine.noteOff(env.release);
          }}
        />
      ) : (
        <WhiteKey
          key={`keyboard-key-${id}`}
          onMouseDown={() => {
            engine.noteOn(note, env);
          }}
          onMouseUp={() => {
            engine.noteOff(env.release);
          }}
        />
      )))}
    </div>
  );
}

export default Keyboard;

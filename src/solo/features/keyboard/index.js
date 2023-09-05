/* eslint-disable no-unused-vars */
import {
  useCallback, useContext, useEffect, useRef
} from 'react';
import { midiToNoteName, toMidi } from '@tonaljs/midi';
import { useSelector } from 'react-redux';
import QwertyHancock from 'qwerty-hancock';
import { AudioEngineContext } from '../../audio';
import { BlackKey, WhiteKey } from '../../components/Keyboard';

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

  const env1 = useSelector((s) => s.envelopes.envelope1);
  const ref = useRef(null);

  const noteOn = (note) => {
    const midi = toMidi(note);
    engine.noteOn(midi, env1);
  };

  const noteOff = () => {
    engine.noteOff(env1.release);
  };

  useEffect(() => {
    if (ref.current) {
      const keyboard = new QwertyHancock({
        id: 'qwerty-keyboard',
        width: 800,
        height: 200,
        octaves: 2,
        startNote: 'A1',
        whiteNotesColour: 'white',
        blackNotesColour: 'black',
        hoverColour: '#f3e939'
      });
      keyboard.keyDown = noteOn;
      keyboard.keyUp = noteOff;
    }
  }, [env1]);

  return (<div ref={ref} id="qwerty-keyboard" />);
  // const filter1ModAmt = useSelector((s) => s.filters.filter1.modAmt);
  // console.log(filter1ModAmt);
  // return (
  //   <div className="flex-1 row justify-start items-start">
  //     {keys.map(({ note, flat }, id) => (flat ? (
  //       <BlackKey
  //         key={`keyboard-key-${id}`}
  //         onMouseDown={() => {
  //           engine.noteOn(note, env);
  //         }}
  //         onMouseUp={() => {
  //           engine.noteOff(env.release);
  //         }}
  //       />
  //     ) : (
  //       <WhiteKey
  //         key={`keyboard-key-${id}`}
  //         onMouseDown={() => {
  //           engine.noteOn(note, env);
  //         }}
  //         onMouseUp={() => {
  //           engine.noteOff(env.release);
  //         }}
  //       />
  //     )))}
  //   </div>
  // );
}

export default Keyboard;

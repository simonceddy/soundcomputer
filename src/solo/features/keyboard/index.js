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
  /** @type {import('../../audio').AudioEngine} */
  const engine = useContext(AudioEngineContext);

  const { envelope1: env1, envelope2: env2 } = useSelector((s) => s.envelopes);
  const ref = useRef(null);
  const filter1ModAmt = useSelector((s) => s.filters.filter1.modAmt);
  const filter2ModAmt = useSelector((s) => s.filters.filter2.modAmt);

  const noteOn = (note) => {
    const midi = toMidi(note);
    engine.noteOn(midi, env1, {
      filter1ModAmt,
      filterEnv: env2,
      filter2ModAmt
    });
  };

  const noteOff = () => {
    engine.noteOff(env1.release, {
      filter1ModAmt,
      filter2ModAmt,
      filterEnv: env2
    });
  };

  useEffect(() => {
    if (ref.current) {
      const keyboard = new QwertyHancock({
        id: 'qwerty-keyboard',
        width: 800,
        height: 200,
        octaves: 2,
        startNote: 'C1',
        whiteNotesColour: 'black',
        blackNotesColour: 'red',
        hoverColour: '#f3e939'
      });
      keyboard.keyDown = noteOn;
      keyboard.keyUp = noteOff;
    }
  }, [env1, env2, filter1ModAmt, filter2ModAmt]);

  return (<div ref={ref} id="qwerty-keyboard" />);
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

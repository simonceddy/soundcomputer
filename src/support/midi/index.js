/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
import jzz from 'jzz';

const logger = jzz.Widget({ _receive(msg) { console.log(msg.toString()); } });
jzz.addMidiOut('Console Logger', logger);
jzz.addMidiIn('In Console Logger', logger);
const outPort = jzz().openMidiOut('Console Logger');
const inPort = jzz().openMidiIn('In Console Logger');
navigator.requestMIDIAccess = jzz.requestMIDIAccess;

outPort.noteOn(0, 'D3', 127);
jzz().or('Cannot start MIDI engine!')
  .openMidiOut().or('Cannot open MIDI Out port!')
  .wait(500)
  .send([0x90, 60, 127]) // note on
  .wait(500)
  .send([0x80, 60, 0]); // note off
jzz().openMidiIn().or('Cannot open MIDI In port!')
  .and(function () { console.log('MIDI-In: ', this.name()); })
  .connect((msg) => { console.log(msg.toString()); })
  .wait(10000)
  .close();

export function scheduleStep(step, time, gate) {
  if (Math.random() <= step.probability) {
    outPort.wait(time)
      .send([0x90, step.value1, step.value2])
      .wait(gate)
      .send([0x80, step.value1, 0]);
  }
}

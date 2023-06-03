/* eslint-disable no-underscore-dangle */
import jzz from 'jzz';

const logger = jzz.Widget({ _receive(msg) { console.log(msg.toString()); } });
jzz.addMidiOut('Console Logger', logger);
const port = jzz().openMidiOut('Console Logger');
navigator.requestMIDIAccess = jzz.requestMIDIAccess;

console.log(port.emit());

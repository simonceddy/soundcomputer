import { useSelector } from 'react-redux';
import {
  APP_MODE_FLTR,
  APP_MODE_INSTR,
  APP_MODE_MODS,
  APP_MODE_SEQ,
  APP_MODE_STEP
} from '../app/support';
import KnobController from './KnobController';
import EndController from './seq/EndController';
import InstrumentController1 from './instrument/InstrumentController1';

function label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'End';
    case APP_MODE_FLTR:
      return 'Hz';
    case APP_MODE_STEP:
      return 'Octave';
    case APP_MODE_MODS:
      return 'LFO 2';
    default:
      return 'Fn';
  }
}

const el = {
  [APP_MODE_SEQ]: EndController,
  [APP_MODE_INSTR]: InstrumentController1
};

function Controller1() {
  const appMode = useSelector((s) => s.app.appMode);
  const El = el[appMode];
  if (!El) return <KnobController label={label(appMode)} />;
  return <El />;
}

export default Controller1;

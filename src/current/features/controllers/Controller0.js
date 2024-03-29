import { useSelector } from 'react-redux';
import {
  APP_MODE_FLTR,
  APP_MODE_INSTR,
  APP_MODE_MODS,
  APP_MODE_SEQ,
  APP_MODE_STEP
} from '../app/support';
import StartController from './seq/StartController';
import KnobController from './KnobController';
import TypeController from './instrument/TypeController';
import NoteController from './step/NoteController';

function label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'Start';
    case APP_MODE_FLTR:
      return 'Type';
    case APP_MODE_STEP:
      return 'Note';
    case APP_MODE_MODS:
      return 'LFO 1';
    default:
      return 'Fn';
  }
}

const el = {
  [APP_MODE_SEQ]: StartController,
  [APP_MODE_INSTR]: TypeController,
  [APP_MODE_STEP]: NoteController,
};

function Controller0() {
  const appMode = useSelector((s) => s.app.appMode);
  const El = el[appMode];
  if (!El) return <KnobController label={label(appMode)} />;
  return <El />;
}

export default Controller0;

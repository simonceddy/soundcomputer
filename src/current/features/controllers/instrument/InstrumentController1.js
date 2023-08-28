import { useSelector } from 'react-redux';
import {
  APP_MODE_FLTR,
  APP_MODE_INSTR,
  APP_MODE_MODS,
  APP_MODE_SEQ,
  APP_MODE_STEP
} from '../../app/support';
import KnobController from '../KnobController';
import { selectCurrentInstrument } from '../../instruments/instrumentsSlice';
import { INSTRUMENT_OSC } from '../../instruments/support';
import WaveTypeController from './WaveTypeController';

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
  [INSTRUMENT_OSC]: WaveTypeController,
};

function InstrumentController1() {
  const appMode = useSelector((s) => s.app.appMode);
  const { instrument } = useSelector(selectCurrentInstrument);
  if (appMode !== APP_MODE_INSTR) return <div>whoops!</div>;

  const El = el[instrument];
  if (!El) return <KnobController label={label(appMode)} />;
  return <El />;
}

export default InstrumentController1;

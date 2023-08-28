import { useSelector } from 'react-redux';
import {
  APP_MODE_FLTR,
  APP_MODE_MODS,
  APP_MODE_SEQ,
  APP_MODE_STEP
} from '../app/support';
import RunModeController from './seq/RunModeController';
import KnobController from './KnobController';

function label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'Dir';
    case APP_MODE_FLTR:
      return 'Q';
    case APP_MODE_STEP:
      return 'Dur';
    case APP_MODE_MODS:
      return 'Env 1';
    default:
      return 'Fn';
  }
}

const el = {
  [APP_MODE_SEQ]: RunModeController
};

function Controller2() {
  const appMode = useSelector((s) => s.app.appMode);
  const El = el[appMode];
  if (!El) return <KnobController label={label(appMode)} />;
  return <El />;
}

export default Controller2;

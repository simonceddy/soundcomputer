import { useSelector } from 'react-redux';
import {
  APP_MODE_FLTR,
  // APP_MODE_SEQ,
  APP_MODE_STEP
} from '../app/support';
import RotaryKnob from '../../../modules/shared/components/RotaryKnob';

function label(mode) {
  switch (mode) {
    // case APP_MODE_SEQ:
    //   return '';
    case APP_MODE_FLTR:
      return 'Q Mod';
    case APP_MODE_STEP:
      return 'Prob %';
    default:
      return 'Fn';
  }
}

function Controller4() {
  const appMode = useSelector((s) => s.app.appMode);

  return (
    <div className="my-2 mx-[4%] col all-center">
      <span className="p-0.5 text-teal-300 text-sm w-11 mx-auto text-center mb-1 bg-black font-digi">
        {label(appMode)}
      </span>
      <RotaryKnob radius="48px" backgroundClass="bg-slate-500" />
    </div>
  );
}

export default Controller4;

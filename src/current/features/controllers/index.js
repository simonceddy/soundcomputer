/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import RotaryKnob from '../../../modules/shared/components/RotaryKnob';
import {
  APP_MODE_FLTR, APP_MODE_INSTR, APP_MODE_SEQ, APP_MODE_STEP, APP_MODE_FX
} from '../app/support';

function controller0Label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'Start';
    case APP_MODE_FLTR:
      return 'Type';
    case APP_MODE_STEP:
      return 'Note';
    default:
      return 'Fn';
  }
}

function controller1Label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'End';
    case APP_MODE_FLTR:
      return 'Hz';
    case APP_MODE_STEP:
      return 'Octave';
    default:
      return 'Fn';
  }
}

function controller2Label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'Dir';
    case APP_MODE_FLTR:
      return 'Q';
    case APP_MODE_STEP:
      return 'Dur';
    default:
      return 'Fn';
  }
}

function controller3Label(mode) {
  switch (mode) {
    case APP_MODE_SEQ:
      return 'Clk X';
    case APP_MODE_FLTR:
      return 'Hz Mod';
    case APP_MODE_STEP:
      return 'Gate';
    default:
      return 'Fn';
  }
}

function controller4Label(mode) {
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

const controllerKnobs = [
  { key: 'controller-0', label: controller0Label },
  { key: 'controller-1', label: controller1Label },
  { key: 'controller-2', label: controller2Label },
  { key: 'controller-3', label: controller3Label },
  { key: 'controller-4', label: controller4Label },
  { key: 'controller-5', label: (mode) => 'Fn' },
  { key: 'controller-6', label: (mode) => 'Fn' },
  { key: 'controller-7', label: (mode) => 'Fn' },
];

function Controllers() {
  const appMode = useSelector((s) => s.app.appMode);
  console.log(appMode);

  return (
    <div className="row items-center justify-around">
      {controllerKnobs.map(({ key, label, backgroundClass = 'bg-stone-500' }) => (
        <div key={`controller-knob-${key}`} className="my-2 mx-[4%] col all-center">
          <span className="p-0.5 text-teal-300 text-sm w-11 mx-auto text-center mb-1 bg-black font-digi">{label && label(appMode)}</span>
          <RotaryKnob radius="48px" backgroundClass={backgroundClass} />
        </div>
      ))}
    </div>
  );
}

export default Controllers;

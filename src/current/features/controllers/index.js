/* eslint-disable no-unused-vars */
// import { useSelector } from 'react-redux';
import Controller0 from './Controller0';
import Controller1 from './Controller1';
import Controller2 from './Controller2';
import Controller3 from './Controller3';
import Controller4 from './Controller4';
import Controller5 from './Controller5';
import Controller6 from './Controller6';
import Controller7 from './Controller7';

const controllerKnobs = [
  { key: 'controller-0', El: Controller0 },
  { key: 'controller-1', El: Controller1 },
  { key: 'controller-2', El: Controller2 },
  { key: 'controller-3', El: Controller3 },
  { key: 'controller-4', El: Controller4 },
  // { key: 'controller-5', El: Controller5 },
  // { key: 'controller-6', El: Controller6 },
  // { key: 'controller-7', El: Controller7 },
];

function Controllers() {
  // const appMode = useSelector((s) => s.app.appMode);
  // console.log(appMode);

  return (
    <div className="row w-full sm:w-11/12 md:w-5/6 mx-auto items-center justify-around">
      {controllerKnobs.map(({ key, El }) => (
        <El key={`controller-knob-${key}`} />
      ))}
    </div>
  );
}

export default Controllers;

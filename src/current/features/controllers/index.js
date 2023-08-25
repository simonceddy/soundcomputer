import RotaryKnob from '../../../modules/shared/components/RotaryKnob';

const controllerKnobs = [
  { key: 'controller-0', label: 'Fn' },
  { key: 'controller-1', label: 'Fn' },
  { key: 'controller-2', label: 'Fn' },
  { key: 'controller-3', label: 'Fn' },
  { key: 'controller-4', label: 'Fn' },
  { key: 'controller-5', label: 'Fn' },
  { key: 'controller-6', label: 'Fn' },
  { key: 'controller-7', label: 'Fn' },
];

function Controllers() {
  return (
    <div className="row items-center justify-around">
      {controllerKnobs.map(({ key, label, backgroundClass = 'bg-stone-500' }) => (
        <div key={`controller-knob-${key}`} className="my-2 mx-[4%] col all-center">
          <span className="p-0.5 text-teal-300 text-sm w-11 mx-auto text-center mb-1 bg-black font-digi">{label}</span>
          <RotaryKnob radius="48px" backgroundClass={backgroundClass} />
        </div>
      ))}
    </div>
  );
}

export default Controllers;

import MiniJack from '../../shared/components/MiniJack';

const ins = [
  { key: 'fm1', label: 'FM1' },
  { key: 'fm2', label: 'FM2' },
];

function Inputs() {
  return (
    <div className="w-full p-2 row justify-evenly items-start my-1.5">
      {ins.map(({ key, label }) => (
        <div
          key={`wave-output-${key}`}
          className="col justify-start items-center flex-1"
        >
          <span className="mb-2 text-sm">
            {label}
          </span>
          <MiniJack className="bg-pink-400" />
        </div>
      ))}
    </div>
  );
}

export default Inputs;

import MiniJack from './MiniJack';

const inputs = [
  { key: 'clk', label: 'Clk' },
  { key: 'run', label: 'Run' },
  { key: 'cv1', label: 'CV 1' },
  { key: 'cv2', label: 'CV 2' },
];

function Inputs() {
  return (
    <div
      className="col mb-[13px]"
      style={{
        width: '150px',
      }}
    >
      <span>Inputs</span>
      <div className="row w-full justify-around items-center">
        {inputs.map(({ key, label }) => (
          <div className="col justify-start items-center mx-[3px] relative" key={`input-col-${key}`}>
            <MiniJack />
            <span className="absolute top-[60%] text-xs right-1">▼</span>
            <span
              className="text-xs mt-[5px] rotate-[55deg]"
              style={{
                wordSpacing: 0.3
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inputs;

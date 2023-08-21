import CircleDiv from '../../../shared/components/CircleDiv';
import MiniJack from './MiniJack';

const outputs = [
  { key: 'output-1', label: '1' },
  { key: 'output-2', label: '2' },
  { key: 'output-3', label: '3' },
  { key: 'output-4', label: '4' },
  { key: 'output-5', label: '5' },
  { key: 'output-6', label: '6' },
  { key: 'output-7', label: '7' },
  { key: 'output-8', label: '8' },
];

function Outputs() {
  return (
    <div
      className="col border-y border-black w-full justify-start items-start"
      style={{
        width: '150px',
      }}
    >
      <span>Outputs</span>
      <div className="row w-full justify-evenly items-center flex-wrap">
        {outputs.map(({ key, label }) => (
          <div className="col justify-start mt-0.5 mb-1.5 items-center mx-[2px]" key={`input-col-${key}`}>
            <CircleDiv
              className="border"
              style={{
                borderColor: '#232323',
                background: 'linear-gradient(to left, #0a9a6d, #018057)',
                width: '13px',
                height: '13px',
              }}
            />
            <span className="text-xs">
              {label}
            </span>
            <MiniJack />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Outputs;

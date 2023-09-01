import RotaryKnob from '../../../modules/shared/components/RotaryKnob';

/* eslint-disable no-unused-vars */
const sources = [
  'env 1',
  'env 2',
  'env 3',
  'lfo 1',
  'lfo 2',
  'lfo 3',
  'pitch',
  'velocity',
];

const destinations = [
  'osc1 Pitch',
  'osc2 Pitch',
  'flt1 Cutoff',
  'flt1 Q',
  'flt2 Cutoff',
  'flt2 Q',
];

function Matrix() {
  return (
    <div className="p-2 font-digi text-sm rounded-lg bg-green-300/50">
      <table>
        <thead>
          <tr className="h-8">
            <th className="w-20">{}</th>
            {destinations.map((val, id) => (
              <th className="relative w-12 odd:bg-slate-500/20 even:bg-gray-200/30" key={`table-header-${id}`}>
                <span className="">
                  {val}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sources.map((val, id) => (
            <tr key={`table-row-${id}`} className="h-8 border-b odd:bg-slate-500/20 even:bg-gray-200/30 border-slate-400">
              <td className="">{val}</td>
              {destinations.map((_v, did) => (
                <td className="border-x border-slate-400" key={`table-row-${id}-cell-${did}`}>
                  <span className="row all-center w-full h-full">
                    <RotaryKnob radius="25px" />
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Matrix;

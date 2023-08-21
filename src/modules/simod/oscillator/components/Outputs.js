/* eslint-disable no-unused-vars */
import sinSvg from '../assets/sine.svg';
import triSvg from '../assets/tri.svg';
import sqrSvg from '../assets/pulse.svg';
import sawSvg from '../assets/saw.svg';
import MiniJack from '../../shared/components/MiniJack';

const waves = [
  { key: 'sine', img: sinSvg },
  { key: 'triangle', img: triSvg },
  { key: 'square', img: sqrSvg },
  { key: 'sawtooth', img: sawSvg },
];

function Outputs() {
  return (
    <div className="w-full p-2 row justify-evenly items-start my-1.5">
      {waves.map(({ key, img }) => (
        <div
          key={`wave-output-${key}`}
          className="col justify-start items-center"
        >
          <img src={img} alt={key} width={22} height={22} className="mb-2" />
          <MiniJack />
        </div>
      ))}
    </div>
  );
}

export default Outputs;

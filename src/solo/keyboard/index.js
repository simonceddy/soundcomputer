import { startKey, stopKey } from '../audio';
import { BlackKey, WhiteKey } from '../components/Keyboard';

const keys = [
  { hz: 100, flat: false },
  { hz: 110, flat: true },
  { hz: 120, flat: false },
  { hz: 130, flat: true },
  { hz: 140, flat: false },
  { hz: 150, flat: false },
  { hz: 160, flat: true },
  { hz: 170, flat: false },
  { hz: 180, flat: true },
  { hz: 190, flat: false },
  { hz: 200, flat: true },
  { hz: 210, flat: false },
];

function Keyboard() {
  return (
    <div className="flex-1 row justify-start items-start">
      {keys.map(({ hz, flat }, id) => (flat ? (
        <BlackKey
          key={`keyboard-key-${id}`}
          onMouseDown={() => {
            startKey(hz);
          }}
          onMouseUp={() => {
            stopKey();
          }}
        />
      ) : (
        <WhiteKey
          key={`keyboard-key-${id}`}
          onMouseDown={() => {
            startKey(hz);
          }}
          onMouseUp={() => {
            stopKey();
          }}
        />
      )))}
    </div>
  );
}

export default Keyboard;

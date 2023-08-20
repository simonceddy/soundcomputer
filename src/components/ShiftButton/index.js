import { useEffect, useRef } from 'react';

function ShiftButton({
  onClick,
}) {
  const ref = useRef(null);

  useEffect(() => {
    let setup = false;
    if (!setup && ref.current) {
      document.addEventListener('keydown', (e) => {
        // console.log(e.key);
        const { key } = e;
        if (key === 'Shift' && ref.current) {
          ref.current.classList.toggle('bg-green-500');
          ref.current.classList.toggle('bg-slate-500');
        }
      });
      document.addEventListener('keyup', (e) => {
        if (e.key === 'Shift' && ref.current) {
          ref.current.classList.toggle('bg-green-500');
          ref.current.classList.toggle('bg-slate-500');
        }
      });
    }
    return () => {
      setup = true;
    };
  }, [ref]);

  return (
    <div className="col justify-start items-center relative text-xs font-mono font-thin text-slate-100 lowercase">
      <span className="h-4 mb-0.5" />
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        className="col all-center bg-slate-500 active:bg-green-500 border-2 border-slate-300 active:border-yellow-400 h-12 w-12 rounded-sm"
      >
        <span className="mb-1">
          shift
        </span>
      </button>
    </div>
  );
}

export default ShiftButton;

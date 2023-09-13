/* eslint-disable max-len */
import { useState } from 'react';

function Help() {
  const [show, setShow] = useState(true);
  return (
    <div className="absolute left-0 top-16">
      {show ? (
        <div className="p-2 rounded-lg bg-lime-100 dark:bg-lime-900 col justify-start items-start w-80 font-mono whitespace-pre-wrap z-50">
          <span className="mb-2">
            Rotary knobs can be operated by either click and drag with the mouse, or by scrolling with mouse wheel or trackpad.
          </span>
          <span className="mb-2">
            You can hold shift to fine tune rotary knobs.
          </span>
          <span className="mb-2">
            You can make large changes to rotary knobs by either:
            <ul className="list-inside list-disc">
              <li>
                holding down ctrl while scrolling,
              </li>
              <li>
                or holding down alt while dragging.
              </li>
            </ul>
          </span>
          <span className="italic text-sm mt-1 mb-2">
            Unfortunately, using alt with scrolling and ctrl with clicking both carry potential issues.
          </span>
          <button
            type="button"
            className="text-lg p-1 font-bold font-mono bg-slate-400/30 border-2 rounded-lg hover:border-yellow-400 active:border-green-400 border-slate-500"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <button className="text-xl font-bold font-mono w-12 h-12 bg-slate-400/30 border-2 rounded-lg hover:border-yellow-400 active:border-green-400 border-slate-500" type="button" onClick={() => setShow(true)}>
            ?
          </button>
        </div>
      )}
    </div>
  );
}

export default Help;

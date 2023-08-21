import { useState } from 'react';

function baseValue(characters = 2) {
  let v = '';
  (new Int8Array(characters)).forEach(() => {
    v += '8';
  });
  return v;
}

function splitVal(v = '') {
  return v.split('');
}

function NumericalDisplay({ value, characters = 2 }) {
  const [val] = useState(value || baseValue(characters));

  return (
    <div
      className="h-[33px] row items-center justify-around border-[#6a3837] border bg-[#560000] text-[#eb2627] rounded-sm font-calc italic overflow-clip pt-1"
      style={{
        width: `${characters * 29}px`,
        fontSize: '1.8rem',
        lineHeight: '1rem',
        letterSpacing: '1px'
      }}
    >
      {splitVal(val).map((bit, id) => (
        <span
          key={`numerical-val-bit-${id}`}
        >
          {bit}.
        </span>
      ))}
    </div>
  );
}

export default NumericalDisplay;

function RotaryKnob() {
  return (
    <div
      className="rotary-knob flex flex-col justify-start items-center border-4 border-red-500 bg-blue-800 rounded-full h-28 w-28"
      id="mdkb"
      style={{ transform: 'rotate(210deg)' }}
      role="presentation"
    >
      <span id="knob-pointer" className="border-4 border-red-500 h-1/3" />
    </div>
  );
}

export default RotaryKnob;

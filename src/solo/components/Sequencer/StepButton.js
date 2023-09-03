import { useMemo } from 'react';

/* eslint-disable no-unused-vars */
const buttonClassNames = (current, active, selected) => {
  let className = '';
  if (current && !selected) className += 'border-yellow-400';
  else if (current && selected) className += 'border-orange-400';
  else if (selected) className += 'border-red-400';
  else className += 'border-gray-600';

  // if (active) className += ' bg-green-400';
  // else className += ' bg-slate-400';
  return className;
};

const buttonBg = (active, probability) => {
  const opacity = (probability / 2) + 0.5;
  if (active) return `rgba(74,222,128,${opacity}`;
  return 'rgb(148,163,184)';
  // else className += ' bg-slate-400';
};

function StepButton({
  children,
  onClick,
  className,
  current = false,
  active = false,
  selected = false,
  probability = 1,
  disabled = false,
}) {
  const stateDependentClasses = useMemo(
    () => buttonClassNames(current, active, selected),
    [current, active, selected]
  );

  const bg = useMemo(() => buttonBg(active, probability), [active, probability]);

  return (
    <div className="rounded h-fit w-fit bg-slate-100 m-2">
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        style={{
          background: bg
        }}
        className={`w-10 h-10 text-sm font-calc relative rounded border-4 ${stateDependentClasses} ${className} col justify-start items-start p-0.5`}
      >
        {children}
        {disabled && (<div className="w-full h-full bg-green-400 absolute bg-slate-300/50 top-0 left-0" />)}
      </button>
    </div>
  );
}

export default StepButton;

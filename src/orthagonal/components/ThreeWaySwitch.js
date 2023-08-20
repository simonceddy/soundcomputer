import { useCallback, useEffect, useState } from 'react';

function UpToggled() {
  return (
    <g>
      <path d="M 100 140 L 400 140 L 340 300 L 160 300 L 100 140 Z" style={{ fill: '#767575', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
      <path d="M 100 60 L 400 60 L 400 140 L 100 140 L 100 60 Z" style={{ fill: '#767575', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
    </g>
  );
}

function DownToggled() {
  return (
    <g transform="matrix(1, 0, 0, -1, 0, 360)">
      <path d="M 100 -40 L 400 -40 L 340 120 L 160 120 L 100 -40 Z" style={{ fill: '#767575', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
      <path d="M 100 -120 L 400 -120 L 400 -40 L 100 -40 L 100 -120 Z" style={{ fill: '#767575', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
    </g>
  );
}

function MidToggled() {
  return (
    <g transform="matrix(1, 0, 0, -1, 0, 360)">
      <path d="M 100 140 L 400 140 L 340 140 L 160 140 L 100 140 Z" style={{ fill: '#767575', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
      <path d="M 100 60 L 400 60 L 400 140 L 100 140 L 100 60 Z" style={{ fill: '#767575', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
    </g>
  );
}

function ThreeWaySwitch({ onChange, value = 1 }) {
  const [state, setState] = useState(value);

  useEffect(() => {
    if (onChange) onChange(state);
  }, [state]);

  const Toggle = useCallback(() => {
    console.log(state);
    switch (state) {
      case 2:
        return <UpToggled />;
      case 1:
        return <MidToggled />;
      case 0:
      default:
        return <DownToggled />;
    }
  }, [state]);

  return (
    <button
      style={{
        width: '24px',
        height: '24px',
      }}
      type="button"
      onClick={(e) => {
        if (e.shiftKey) setState(((state > 0) ? state - 1 : 2));
        else setState((state + 1) % 3);
      }}
    >
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path d="M 400 250 A 150 150 0 0 1 250 400 A 150 150 0 0 1 100 250 A 150 150 0 0 1 250 100 A 150 150 0 0 1 400 250 Z" style={{ fill: '#595858', stroke: 'rgb(0, 0, 0)', strokeWidth: '8px' }} />
        <Toggle />
      </svg>
    </button>
  );
}

export default ThreeWaySwitch;

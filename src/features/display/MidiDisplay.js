import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeader } from './displaySlice';

function MidiDisplay({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup) dispatch(setHeader('MIDI'));
    return () => {
      setup = true;
    };
  });
  return (
    <div className="flex flex-col justify-start items-center text-sm">
      {children}
    </div>
  );
}

export default MidiDisplay;

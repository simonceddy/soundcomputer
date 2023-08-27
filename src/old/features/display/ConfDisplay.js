import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeader } from './displaySlice';

function ConfDisplay({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup) dispatch(setHeader('Config'));
    return () => {
      setup = true;
    };
  });
  return (
    <div>
      {children}
    </div>
  );
}

export default ConfDisplay;

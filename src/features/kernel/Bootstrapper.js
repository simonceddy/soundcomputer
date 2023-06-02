import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bootUp } from './kernelSlice';

function Bootstrapper({ children }) {
  const { booted } = useSelector((s) => s.kernel);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && !booted) {
      setTimeout(() => dispatch(bootUp()), 1000);
    }
    return () => {
      setup = true;
    };
  });

  return children;
}

export default Bootstrapper;

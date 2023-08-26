/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooted } from './features/app/appSlice';

function Bootloader({ children }) {
  const booted = useSelector((s) => s.app.booted);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setBooted());
    }, 1200);
  }, []);

  return children;
}

export default Bootloader;

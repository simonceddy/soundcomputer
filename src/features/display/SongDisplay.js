import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from './displaySlice';

function SongDisplay({ children }) {
  const song = useSelector((s) => s.song);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && song.name) dispatch(setHeader(song.name));
    return () => {
      setup = true;
    };
  }, [song]);
  return (
    <div>
      {children}
    </div>
  );
}

export default SongDisplay;

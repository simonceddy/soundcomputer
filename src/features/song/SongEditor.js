import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setHeader } from '../display/displaySlice';
import { setSongName } from './songSlice';

function SongEditor() {
  const song = useSelector((s) => s.song);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && song.name) dispatch(setHeader('Song'));
    return () => {
      setup = true;
    };
  }, [song]);

  return (
    <div className="w-full">
      <label htmlFor="song-name-input" className="w-1/2 flex flex-row justify-between items-center">
        <span className="ml-1 text-sm underline">
          Song name:
        </span>
        <input
          id="song-name-input"
          name="song-name-input"
          type="text"
          value={song.name}
          onChange={(e) => {
            dispatch(setSongName(e.target.value));
          }}
          className="mr-1 rounded text-sm border-2 border-slate-300 focus:border-blue-400 bg-slate-300 p-1"
        />
      </label>
    </div>
  );
}

export default SongEditor;

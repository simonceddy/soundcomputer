import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setHeader } from '../display/displaySlice';
import { setSongName } from './songSlice';

function SongEditor() {
  const song = useSelector((s) => s.song.present);
  const dispatch = useDispatch();
  useEffect(() => {
    let setup = false;
    if (!setup && song.name) dispatch(setHeader('Song'));
    return () => {
      setup = true;
    };
  }, [song]);

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <label htmlFor="song-name-input" className="w-2/3 flex flex-row justify-between items-center">
        <span className="mr-1 text-sm underline">
          Song name:
        </span>
        <input
          id="song-name-input"
          name="song-name-input"
          type="text"
          value={song.name || ''}
          onChange={(e) => {
            dispatch(setSongName(e.target.value));
          }}
          className="mr-1 rounded text-sm border-2 border-slate-800 border-opacity-0 focus:border-yellow-400 focus:border-opacity-100 bg-slate-300 p-1 dark:bg-slate-800 text-slate-800 dark:text-slate-300 flex-1"
        />
        <button
          onClick={() => {
            const worker = new Worker('worklets/randomName.js');
            worker.onmessage = ({ data }) => {
              if (data) {
                dispatch(setSongName(data));
                worker.terminate();
              }
            };
            worker.postMessage(1);
          }}
          type="button"
        >
          RND
        </button>
      </label>
      <div
        className="flex flex-col justify-start items-start text-sm w-2/3"
      >{song.metaData ? (
        <>
          <div className="flex flex-row justify-between items-center w-full">
            <span>
              Created:
            </span>
            <span>
              {song.metaData.created && new Date(song.metaData.created).toLocaleString('au-Me')}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <span>
              Last saved:
            </span>
            <span>
              {song.metaData.modified ? new Date(song.metaData.modified).toLocaleString('au-Me') : 'never saved'}
            </span>
          </div>
        </>
      ) : 'Nay!'}
      </div>
    </div>
  );
}

export default SongEditor;

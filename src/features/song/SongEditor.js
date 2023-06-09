import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import { setSongName } from './songSlice';
import { useRandomName } from '../../hooks';

function SongEditor() {
  const song = useSelector((s) => s.song.present);
  const dispatch = useDispatch();
  const randomName = useRandomName();

  return (
    <div className="w-full col justify-start items-start">
      <label htmlFor="song-name-input" className="w-full row justify-between items-center">
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
          className="mr-1 rounded text-sm border-2 border-slate-800 border-opacity-0 focus:border-yellow-400 focus:border-opacity-100 bg-slate-300 p-1 dark:bg-slate-800 text-slate-800 dark:text-slate-300 w-2/3"
        />
        <button
          onClick={throttle(randomName, 200)}
          type="button"
        >
          RND
        </button>
      </label>
      <div
        className="row justify-between items-start text-sm w-2/3"
      >
        <span className="underline">Tempo</span><span>{song.tempo}</span>
      </div>
      <div
        className="col justify-start items-start text-sm w-2/3"
      >{song.metaData ? (
        <>
          <div className="row justify-between items-center w-full">
            <span className="underline">
              Created:
            </span>
            <span>
              {song.metaData.created && new Date(song.metaData.created).toLocaleString('au-Me')}
            </span>
          </div>
          <div className="row justify-between items-center w-full">
            <span className="underline">
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

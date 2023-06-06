import { useDispatch, useSelector } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import NormSquareButton from '../../components/NormSquareButton';
import { setNotification } from '../display/displaySlice';
import { saveSong } from '../../util/storage';
import { toggleLoadingSong } from './kernelSlice';
import { setSongMetaData } from '../song/songSlice';

function GlobalCtrlPanel() {
  const { sequencer, song } = useSelector((s) => ({
    sequencer: s.sequencer.present,
    song: s.song.present
  }));
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between items-center p-1 rounded border-2 border-slate-300">
      <div className="flex flex-row justify-evenly items-center w-full">
        <NormSquareButton
          onClick={() => {
            // console.log('loading screen');
            dispatch(toggleLoadingSong());
          }}
        >
          load
        </NormSquareButton>
      </div>
      <div className="flex flex-row justify-evenly items-center w-full">
        <NormSquareButton
          onClick={() => {
            dispatch(ActionCreators.undo());
          }}
        >
          undo
        </NormSquareButton>
        <NormSquareButton
          onClick={() => {
            dispatch(ActionCreators.redo());
          }}
        >
          redo
        </NormSquareButton>
        <NormSquareButton
          onClick={() => {
            dispatch(setNotification('Saving...'));
            setTimeout(() => {
              saveSong(song.name, {
                name: song.name,
                created: song.metaData.created ? new Date(song.metaData.created) : null,
                tempo: song.tempo,
                sequencer,
              })
                .then((result) => {
                  // console.log(result);
                  dispatch(setSongMetaData({
                    ...song.metaData,
                    modified: result.modified && result.modified.getTime
                      ? result.modified.getTime() : null
                  }));
                  dispatch(setNotification(`Saved ${song.name}`));
                })
                .catch(console.error);
            }, 400);
          }}
        >
          save
        </NormSquareButton>
      </div>
      {}
    </div>
  );
}

export default GlobalCtrlPanel;

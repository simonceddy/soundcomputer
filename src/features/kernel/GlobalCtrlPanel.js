import { useDispatch, useSelector } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import NormSquareButton from '../../components/NormSquareButton';
import { setNotification } from '../display/displaySlice';
import { saveAs } from '../../util/storage';
import { toggleLoadingSong } from './kernelSlice';

function GlobalCtrlPanel() {
  const { sequencer, name } = useSelector((s) => ({
    sequencer: s.sequencer.present,
    name: s.song.present.name
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
            saveAs(name, { name, sequencer, })
              .then((result) => {
                console.log(result);
                dispatch(setNotification('Saved'));
              })
              .catch(console.error);
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

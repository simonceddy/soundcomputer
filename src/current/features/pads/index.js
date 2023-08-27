/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import PadButton from '../../components/PadButton';
import PadButtonRow from '../../components/PadButtonRow';
import { setSelectedStep, toggleStep } from '../sequencer/sequencerSlice';
import {
  APP_MODE_SEQ,
} from '../app/support';

const padObjects = [];

(new Int8Array(4)).forEach((_v, i) => {
  const page = [];
  (new Int8Array(16)).forEach((_n, id) => {
    page.push({
      key: (id) + (i * 16)
    });
  });
  padObjects.push(page);
});

function renderPadColours(id, track, selectedStep) {
  let className = '';
  if (track.steps[id]?.active) {
    className += 'bg-green-400';
  } else className += 'bg-slate-700';
  if (id === track.currentStep) {
    className += ' border-green-400 hover:border-sky-500 active:border-violet-500';
  } else if (id === selectedStep) {
    className += ' border-yellow-500 hover:border-lime-500 active:border-violet-500';
  } else {
    className += ' border-slate-500';
  }

  return className;
}

function Pads() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const appMode = useSelector((s) => s.app.appMode);
  const { selectedStep, tracks } = useSelector((s) => s.sequencer);
  const page = useSelector((s) => s.pads.page);
  const dispatch = useDispatch();
  const track = tracks[selectedTrackKey];
  // console.log(track);
  return (
    <PadButtonRow>
      {page && padObjects[page - 1] && padObjects[page - 1].map(({ key }) => (
        <PadButton
          key={`pg-${page}-pad-${key}`}
          onClick={() => {
            dispatch(setSelectedStep(key));
            if (appMode === APP_MODE_SEQ) {
              dispatch(toggleStep({ track: selectedTrackKey, step: key }));
            }
          }}
          className={`text-white ${renderPadColours(key, track, selectedStep)}`}
        >
          {key + 1}
        </PadButton>
      ))}
    </PadButtonRow>
  );
}

export default Pads;

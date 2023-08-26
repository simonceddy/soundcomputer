/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import PadButton from '../../components/PadButton';
import PadButtonRow from '../../components/PadButtonRow';
import { setSelectedStep } from '../sequencer/sequencerSlice';

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

function Pads() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const { selectedStep, tracks } = useSelector((s) => s.sequencer);
  const page = useSelector((s) => s.pads.page);
  const dispatch = useDispatch();
  // console.log(tracks[selectedTrackKey]);
  return (
    <PadButtonRow>
      {page && padObjects[page - 1] && padObjects[page - 1].map(({ key }) => (
        <PadButton
          key={`pg-${page}-pad-${key}`}
          onClick={() => dispatch(setSelectedStep(key))}
          className={`text-white bg-slate-800 ${selectedStep === (key) ? 'border-yellow-500 hover:border-lime-500 active:border-violet-500' : 'border-slate-500'}`}
        >
          {key + 1}
        </PadButton>
      ))}
    </PadButtonRow>
  );
}

export default Pads;

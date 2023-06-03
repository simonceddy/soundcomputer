import { useDispatch, useSelector } from 'react-redux';
import StepEditor from '../sequencer/StepEditor';
import SongEditor from '../song/SongEditor';
import LaneEditor from '../sequencer/LaneEditor';
import {
  // DISPLAY_MODE_CONF,
  // DISPLAY_MODE_MIDI,
  DISPLAY_MODE_PATTERN,
  DISPLAY_MODE_SONG,
  DISPLAY_MODE_STEP,
  DISPLAY_MODE_TRACK
} from '../../support/consts';
import { TabButton } from '../../components/Tabs';
import { setDisplayMode } from './kernelSlice';

const data = {
  [DISPLAY_MODE_SONG]: { label: 'Song', Component: SongEditor, },
  [DISPLAY_MODE_STEP]: { label: 'Step', Component: StepEditor, },
  [DISPLAY_MODE_PATTERN]: { label: 'Pattern', Component: () => <div>Pattern mode</div>, },
  // [DISPLAY_MODE_MIDI]: { label: 'MIDI', Component: MidiDisplay,},
  [DISPLAY_MODE_TRACK]: { label: 'Track', Component: LaneEditor, },
  // [DISPLAY_MODE_CONF]: { label: 'Config', Component: ConfDisplay,},
};

const dataKeys = Object.keys(data);

function Tabs() {
  const { displayMode, header } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    booted: s.kernel.booted,
    notify: s.display.notify,
    header: s.display.header
  }));
  const dispatch = useDispatch();

  const d = data[displayMode] || false;
  console.log(dataKeys, displayMode);
  return (
    <div className="flex flex-col flex-1 justify-start items-center h-full rounded bg-slate-300 dark:bg-slate-900 text-blue-900 dark:text-blue-200 font-mono mx-2 mt-2 mb-1">
      <div className="flex w-full flex-row justify-start items-start border-b-2 border-slate-900 dark:border-slate-300">
        {dataKeys.map((k) => (
          <TabButton
            active={displayMode === Number(k)}
            key={`tab-button-${k}`}
            onClick={() => {
              dispatch(setDisplayMode(k));
            }}
          >
            {data[k].label || k}
          </TabButton>
        ))}
      </div>
      <div className="w-full border-b-2 border-slate-900 dark:border-slate-300 font-mono font-bold py-1 flex flex-row justify-between items-start text-sm mt-2">
        {header}
      </div>
      <div className="w-full flex-1 p-2">
        {d && d.Component && <d.Component />}
      </div>
    </div>
  );
}

export default Tabs;

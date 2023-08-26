import { useSelector } from 'react-redux';
import Title from '../../components/Title';
import Display from '../../components/Display';
import DisplayHeader from '../../components/DisplayHeader';
import {
  APP_MODE_FLTR,
  APP_MODE_INSTR,
  APP_MODE_MAN,
  APP_MODE_MODS,
  APP_MODE_SEQ,
  APP_MODE_STEP
} from './support';
import SequenceDisplay from '../sequencer/SequenceDisplay';
import StepDisplay from '../sequencer/StepDisplay';
import InstrumentDisplay from '../instruments/InstrumentDisplay';
import FilterDisplay from '../filters/FilterDisplay';
import ModsDisplay from '../mods/ModsDisplay';
import ManualDisplay from '../man/ManualDisplay';

function AppDisplay() {
  const { booted, appMode, bpm } = useSelector((s) => s.app);
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  return (
    <Display>
      {!booted ? (<Title />) : (
        <>
          <DisplayHeader>
            <div>SoundComputer</div>
            <div>{bpm} BPM</div>
            <div>Track {selectedTrackKey + 1}</div>
          </DisplayHeader>
          <div className="flex-1 col px-1 bg-black text-teal-200 justify-start items-start w-full">
            {appMode === APP_MODE_SEQ && <SequenceDisplay />}
            {appMode === APP_MODE_STEP && <StepDisplay />}
            {appMode === APP_MODE_INSTR && <InstrumentDisplay />}
            {appMode === APP_MODE_FLTR && <FilterDisplay />}
            {appMode === APP_MODE_MODS && <ModsDisplay />}
            {appMode === APP_MODE_MAN && <ManualDisplay />}
          </div>
        </>
      )}
    </Display>
  );
}

export default AppDisplay;

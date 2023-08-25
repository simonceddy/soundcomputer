import { useSelector } from 'react-redux';
import Title from '../../components/Title';
import Display from '../../components/Display';
import DisplayHeader from '../../components/DisplayHeader';
import { APP_MODE_INSTR, APP_MODE_SEQ, APP_MODE_STEP } from './support';
import SequenceDisplay from '../sequencer/SequenceDisplay';
import StepDisplay from '../sequencer/StepDisplay';
import InstrumentDisplay from '../instruments/InstrumentDisplay';

function AppDisplay() {
  const { booted, appMode } = useSelector((s) => s.app);
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  return (
    <Display>
      {!booted ? (<Title />) : (
        <>
          <DisplayHeader>
            <div>SoundComputer</div>
            <div>120 BPM</div>
            <div>Track {selectedTrackKey + 1}</div>
          </DisplayHeader>
          <div className="flex-1 col justify-start items-start w-full">
            {appMode === APP_MODE_SEQ && <SequenceDisplay />}
            {appMode === APP_MODE_STEP && <StepDisplay />}
            {appMode === APP_MODE_INSTR && <InstrumentDisplay />}
          </div>
        </>
      )}
    </Display>
  );
}

export default AppDisplay;

import { useSelector, useDispatch } from 'react-redux';
import DisplaySubHeading from '../../components/DisplaySubHeading';
import { setAssignment } from './instrumentsSlice';
import { INSTRUMENT_OSC } from './support';
import OscillatorDisplay from './OscillatorDisplay';
import DisplaySelector from '../../components/DisplaySelector';

const opts = [
  { value: 0, label: 'None' },
  { value: 1, label: 'Oscillator' }
];

function InstrumentDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const assignment = useSelector((s) => s.instruments.assignments[selectedTrackKey]);
  const dispatch = useDispatch();
  return (
    <div className="col w-full justify-start items-start">
      <DisplaySubHeading>
        Track {selectedTrackKey + 1} Instrument
      </DisplaySubHeading>
      <DisplaySelector
        label="Instrument type:"
        id="track-instrument-assignment"
        onChange={(e) => {
          dispatch(setAssignment({
            instrument: Number(e.target.value),
            track: selectedTrackKey
          }));
        }}
        value={assignment}
        opts={opts}
      />
      {assignment === INSTRUMENT_OSC && (
        <OscillatorDisplay />
      )}
    </div>
  );
}

export default InstrumentDisplay;

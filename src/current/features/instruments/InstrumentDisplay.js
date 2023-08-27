import { useSelector, useDispatch } from 'react-redux';
import DisplaySubHeading from '../../components/DisplaySubHeading';
import { setAssignment } from './instrumentsSlice';

const opts = [
  { key: 0, label: 'None' },
  { key: 1, label: 'Oscillator' }
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
      <label htmlFor="track-instrument-assignment">
        <span className="text-lg font-bold mr-2">
          Instrument Mode:
        </span>
        <select
          id="track-instrument-assignment"
          onChange={(e) => {
            dispatch(setAssignment({
              instrument: Number(e.target.value),
              track: selectedTrackKey
            }));
          }}
          value={assignment}
          className="bg-black text-teal-200 text-xl font-bold p-1"
        >
          {opts.map((v, id) => (
            <option value={v.key} key={`instrument-type-opt-${id}`} label={v.label} />
          ))}
        </select>
      </label>
    </div>
  );
}

export default InstrumentDisplay;

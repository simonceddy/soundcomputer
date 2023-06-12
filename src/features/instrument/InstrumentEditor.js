import { useDispatch, useSelector } from 'react-redux';
import { instruments } from '../../support/instruments';
import { assignToLane } from './instrumentSlice';

function SelectInstrument({ value = 0, onChange }) {
  return (
    <select
      className="p-2 border-2 rounded-md font-mono text-teal-800 dark:text-teal-200 bg-slate-100 dark:bg-slate-900 border-slate-500"
      value={value}
      onChange={onChange}
    >
      {instruments.map(({ key, label }) => (
        <option key={key} value={key} label={label} />
      ))}
    </select>
  );
}

function InstrumentEditor() {
  const { selectedLane, assignments } = useSelector((s) => ({
    selectedLane: s.sequencer.present.selectedLane,
    assignments: s.instruments.assignments
  }));
  // const { assignments } = useSelector((s) => s.instruments);
  const dispatch = useDispatch();
  // console.log(assignments[selectedLane]);
  return (
    <div className="col w-full">
      <div className="row w-2/3 justify-around items-center">
        <span>Type</span>
        <span>{assignments[selectedLane]}</span>
        <SelectInstrument
          value={assignments[selectedLane]}
          onChange={(e) => {
            // console.log(e.target.value);
            dispatch(assignToLane({
              laneId: selectedLane,
              instrumentId: Number(e.target.value)
            }));
          }}
        />
      </div>
    </div>
  );
}

export default InstrumentEditor;

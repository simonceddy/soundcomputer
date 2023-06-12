import { useSelector } from 'react-redux';
import { TabHeader } from '../../components/Tabs';

function InstrumentEditor() {
  const { selectedLane, assignments } = useSelector((s) => ({
    selectedLane: s.sequencer.present.selectedLane,
    assignments: s.instruments.assignments
  }));

  return (
    <div className="col">
      <TabHeader>
        Instrument for {selectedLane}
      </TabHeader>
      <div className="row">
        <span>Type</span>
        <span>{assignments[selectedLane]}</span>
      </div>
    </div>
  );
}

export default InstrumentEditor;

import TextLabel from './TextLabel';

function TitleRow() {
  return (
    <div className="row all-center font-bold font-sans">
      <TextLabel className="text-lg">ED-101</TextLabel>
      <TextLabel className="text-sm ml-2">INDEXED QUAD SEQUENCER</TextLabel>
    </div>
  );
}

export default TitleRow;

import { useSelector } from 'react-redux';

const counter = [];
(new Int8Array(4)).forEach((_n, key) => {
  const steps = [];
  (new Int8Array(16)).forEach((_v, id) => {
    steps.push(id + (16 * key));
  });
  counter[key] = steps;
});

function SequenceOverview() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const track = useSelector((s) => s.sequencer.tracks[selectedTrackKey]);
  if (!track) return <div>Error: Undefined track!</div>;

  return (
    <div>
      {counter.map((steps, key) => (
        <div className="row" key={`seq-overview-row-${key}`}>
          {steps.map((id) => (
            <div
              className={`w-4 h-4 m-0.5 rounded-full text-xl col all-center border border-teal-400 ${track.steps[id]?.active ? 'bg-teal-400 text-black' : 'bg-black text-teal-400'}`}
              key={`${id}`}
            >
              {track.currentStep === id ? '#' : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SequenceOverview;

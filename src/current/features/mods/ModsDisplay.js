import TrackLFOs from './TrackLFOs';
import DisplaySubHeading from '../../components/DisplaySubHeading';

function ModsDisplay() {
  return (
    <div className="col w-full justify-start items-start">
      <DisplaySubHeading>
        Modulators
      </DisplaySubHeading>
      <TrackLFOs />
    </div>
  );
}

export default ModsDisplay;

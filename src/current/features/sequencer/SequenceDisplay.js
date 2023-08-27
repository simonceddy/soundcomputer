import { useSelector } from 'react-redux';
import DisplaySubHeading from '../../components/DisplaySubHeading';
import DisplayValueContainer from '../../components/DisplayValueContainer';
import { render2DigitNum } from '../../support';
import SequenceOverview from './SequenceOverview';

function SequenceDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const track = useSelector((s) => s.sequencer.tracks[selectedTrackKey]);
  if (!track) return <div>Error: Unknown track!</div>;
  // console.log(track, selectedTrackKey);
  return (
    <div className="col w-full">
      <DisplaySubHeading>Track {selectedTrackKey + 1}</DisplaySubHeading>
      <div className="row w-full justify-between items-start">
        <div className="col w-1/3 justify-between items-start">
          <div className="row w-full justify-between items-center my-1">
            <span className="">Start step:</span>
            <DisplayValueContainer>{render2DigitNum(track.start + 1)}</DisplayValueContainer>
          </div>
          <div className="row w-full justify-between items-center my-1">
            <span className="">End step:</span>
            <DisplayValueContainer>{render2DigitNum(track.end + 1)}</DisplayValueContainer>
          </div>
          <div className="row w-full justify-between items-center my-1">
            <span className="">Sequence length:</span>
            <DisplayValueContainer>
              {render2DigitNum((track.end + 1) - track.start)}
            </DisplayValueContainer>
          </div>
        </div>
        <div className="col">
          <SequenceOverview />
        </div>
      </div>
    </div>
  );
}

export default SequenceDisplay;

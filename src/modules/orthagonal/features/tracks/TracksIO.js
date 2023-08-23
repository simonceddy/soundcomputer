import { useSelector } from 'react-redux';
import IOSection from '../../components/IOSection';
import TrackIO from '../../components/TrackIO';

function TracksIO() {
  const tracks = useSelector((s) => s.tracks);
  const trackKeys = Object.keys(tracks);
  return (
    <IOSection>
      {trackKeys.map((key) => (
        <TrackIO key={`track-${key}`} track={key} />
      ))}
    </IOSection>
  );
}

export default TracksIO;

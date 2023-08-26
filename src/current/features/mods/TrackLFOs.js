import { useSelector } from 'react-redux';
import LFOSection from '../../components/LFOSection';

function TrackLFOs() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const trackMods = useSelector((s) => s.modulation.trackMods[selectedTrackKey]);
  console.log(trackMods);
  return (
    <div className="col all-center">
      <span className="text-lg mx-auto underline">Track {selectedTrackKey + 1} LFOs</span>
      <LFOSection
        label="LFO 1"
        rate={trackMods.lfo1.rate}
        wave={trackMods.lfo1.wave}
        sync={trackMods.lfo1.sync}
        id="track-lfo-1"
      />
      <LFOSection
        label="LFO 2"
        rate={trackMods.lfo2.rate}
        wave={trackMods.lfo2.wave}
        sync={trackMods.lfo2.sync}
        id="track-lfo-2"
      />
    </div>
  );
}

export default TrackLFOs;

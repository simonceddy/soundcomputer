import { useDispatch, useSelector } from 'react-redux';
import { capitalize } from 'lodash';
import { oscillatorTypes } from './support';
import DisplaySelector from '../../components/DisplaySelector';
import { updateSettings } from './instrumentsSlice';

const keys = Object.keys(oscillatorTypes);
const opts = keys.map((value) => ({
  value,
  label: capitalize(value)
}));

function OscillatorDisplay() {
  const selectedTrackKey = useSelector((s) => s.tracks.selectedTrackKey);
  const settings = useSelector((s) => s.instruments.settings[selectedTrackKey]);
  const dispatch = useDispatch();
  if (!settings || !settings.type) {
    console.log(settings, selectedTrackKey);
    return (
      <div>
        Error: Could not find valid instrument settings.
      </div>
    );
  }
  return (
    <div>
      <DisplaySelector
        value={settings.type}
        label="Oscillator Type"
        opts={opts}
        onChange={(e) => {
          dispatch(updateSettings({
            track: selectedTrackKey,
            settings: {
              ...settings,
              type: e.target.value
            }
          }));
        }}
      />
    </div>
  );
}

export default OscillatorDisplay;

import { useDispatch, useSelector } from 'react-redux';
import KnobController from '../KnobController';
import { selectSelectedTrackKey } from '../../tracks/tracksSlice';
import { selectCurrentInstrument, updateSettings } from '../../instruments/instrumentsSlice';
import { INSTRUMENT_OSC, oscillatorTypes } from '../../instruments/support';

const types = Object.keys(oscillatorTypes);

function WaveTypeController() {
  const selectedTrackKey = useSelector(selectSelectedTrackKey);
  const { instrument, settings } = useSelector(selectCurrentInstrument);
  const dispatch = useDispatch();

  if (instrument !== INSTRUMENT_OSC) return <div>whoops</div>;

  return (
    <KnobController
      microStepSize={0.1}
      maxVal={types.length - 1}
      minVal={0}
      megaStepSize={1}
      label="Type"
      onChange={(v) => {
        dispatch(updateSettings({
          track: selectedTrackKey,
          settings: {
            type: types[Math.round(v)] || 'sine'
          }
        }));
      }}
      value={types.indexOf(settings.type)}
    />
  );
}

export default WaveTypeController;

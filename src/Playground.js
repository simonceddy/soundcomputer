/* eslint-disable no-unused-vars */
import audioContext from './support/audioContext';
import { useSample } from './hooks';
import { playSweep } from './support/instruments';

function Playground() {
  const playHat = useSample('assets/phaseplant shorthat2.mp3');
  const playKick = useSample('assets/green ghoul kick.mp3');
  return (
    <div className="w-full h-full text-lg bg-black font-mono font-bold text-teal-400 col justify-start items-center p-2 relative">
      {}
      <button
        type="button"
        onClick={(e) => {
          playHat(audioContext.currentTime);
        }}
      >
        Hat
      </button>
      <button
        type="button"
        onClick={(e) => {
          playKick(audioContext.currentTime);
        }}
      >
        Kick
      </button>
      <button
        type="button"
        onClick={(e) => {
          playSweep(audioContext.currentTime, 240);
        }}
      >
        Tone
      </button>
    </div>
  );
}

export default Playground;

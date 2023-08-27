import { useEffect, useState } from 'react';
import audioContext from '../support/audioContext';

export default function useAudioBuffer(url = 'assets/green ghoul kick.mp3') {
  const [buffer, setBuffer] = useState(null);
  useEffect(() => {
    const fetchSample = async () => {
      const res = await fetch(url);
      // console.log(res);
      const arrayBuffer = await res.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      setBuffer(audioBuffer);
    };
    fetchSample();
  }, []);

  return buffer;
}

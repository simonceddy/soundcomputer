import { useEffect, useState } from 'react';
import audioContext from '../support/audioContext';

function playSample(audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer,
    playbackRate: 1,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}

function useSample(url = 'assets/green ghoul kick.mp3') {
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

  return () => {
    if (buffer) playSample(buffer, audioContext.currentTime);
  };
}

export default useSample;

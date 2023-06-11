export default function playSample(audioContext, audioBuffer, time, playbackRate = 1) {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer,
    playbackRate,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}

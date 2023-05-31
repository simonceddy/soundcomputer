export default function makeSample(audioCtx) {
  let playbackRate = 1;
  const rateControl = document.querySelector('#rate');
  rateControl.addEventListener(
    'input',
    (ev) => {
      playbackRate = parseInt(ev.target.value, 10);
    },
    false
  );

  function playSample(audioContext, audioBuffer, time) {
    const sampleSource = new AudioBufferSourceNode(audioCtx, {
      buffer: audioBuffer,
      playbackRate,
    });
    sampleSource.connect(audioContext.destination);
    sampleSource.start(time);
    return sampleSource;
  }

  return playSample;
}

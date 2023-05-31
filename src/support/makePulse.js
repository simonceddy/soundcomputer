export default function makePulse(audioCtx) {
  let pulseHz = 880;
  const hzControl = document.querySelector('#hz');
  hzControl.addEventListener(
    'input',
    (ev) => {
      pulseHz = parseInt(ev.target.value, 10);
    },
    false
  );

  let lfoHz = 30;
  const lfoControl = document.querySelector('#lfo');
  lfoControl.addEventListener(
    'input',
    (ev) => {
      lfoHz = parseInt(ev.target.value, 10);
    },
    false
  );

  const pulseTime = 1;
  function playPulse(time) {
    const osc = new OscillatorNode(audioCtx, {
      type: 'sine',
      frequency: pulseHz,
    });

    const amp = new GainNode(audioCtx, {
      value: 1,
    });

    const lfo = new OscillatorNode(audioCtx, {
      type: 'square',
      frequency: lfoHz,
    });

    lfo.connect(amp.gain);
    osc.connect(amp).connect(audioCtx.destination);
    lfo.start();
    osc.start(time);
    osc.stop(time + pulseTime);
  }

  return playPulse;
}

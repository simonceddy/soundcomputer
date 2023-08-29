async function setupAudio() {
  const audioContext = new AudioContext();
  await audioContext.audioWorklet.addModule('oscWorklet.js');

  const oscillatorNode = new AudioWorkletNode(audioContext, 'triangle-oscillator', {
    processorOptions: {
      sampleRate: audioContext.sampleRate
    }
  });
  const gainNode = audioContext.createGain();
  const gainParam = gainNode.gain;
  gainParam.setValueAtTime(0, audioContext.currentTime);

  const attackTime = 0.21; // Time in seconds for the attack phase
  const decayTime = 0.1; // Time in seconds for the decay phase
  const sustainLevel = 0.5; // Sustain level (between 0 and 1)
  const releaseTime = 0.2; // Time in seconds for the release phase

  const frequencyParam = oscillatorNode.parameters.get('frequency');
  frequencyParam.setValueAtTime(228, audioContext.currentTime);

  const filterNode = audioContext.createBiquadFilter();
  filterNode.type = 'lowpass';
  filterNode.frequency.value = 1000; // Initial frequency
  filterNode.Q.value = 57;

  oscillatorNode.connect(gainNode);
  gainNode.connect(filterNode);
  filterNode.connect(audioContext.destination);

  const filterEnvelope = audioContext.createGain();
  filterEnvelope.gain.value = 0;
  filterEnvelope.connect(filterNode.frequency);

  document.getElementById('startButton').addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    frequencyParam.setValueAtTime(228, audioContext.currentTime);

    // ADSR envelope for filter frequency modulation
    filterEnvelope.gain.cancelScheduledValues(audioContext.currentTime);
    filterEnvelope.gain.setValueAtTime(0, audioContext.currentTime);
    filterEnvelope.gain.linearRampToValueAtTime(1, audioContext.currentTime + attackTime);
    filterEnvelope.gain.linearRampToValueAtTime(
      sustainLevel,
      audioContext.currentTime + attackTime + decayTime
    );
    gainParam.setValueAtTime(0, audioContext.currentTime);
    gainParam.linearRampToValueAtTime(1, audioContext.currentTime + attackTime);
    gainParam.linearRampToValueAtTime(
      sustainLevel,
      audioContext.currentTime + attackTime + decayTime
    );
  });

  document.getElementById('stopButton').addEventListener('click', () => {
    const { currentTime } = audioContext;
    gainParam.cancelScheduledValues(currentTime);
    gainParam.setValueAtTime(gainParam.value, currentTime);
    gainParam.linearRampToValueAtTime(0, currentTime + releaseTime);
    filterEnvelope.gain.cancelScheduledValues(currentTime);
    filterEnvelope.gain.setValueAtTime(filterEnvelope.gain.value, currentTime);
    filterEnvelope.gain.linearRampToValueAtTime(0, currentTime + releaseTime);
  });
}

setupAudio();

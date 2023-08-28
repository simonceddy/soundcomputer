// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create a carrier oscillator
const carrier = audioContext.createOscillator();
carrier.frequency.value = 440; // Set carrier frequency
carrier.type = 'sine'; // Set carrier oscillator type

// Create a modulator oscillator
const modulator = audioContext.createOscillator();
modulator.frequency.value = 2; // Set modulator frequency
modulator.type = 'sine'; // Set modulator oscillator type

// Create an AudioNode for controlling the modulation depth
const modulationDepth = audioContext.createGain();
modulationDepth.gain.value = 200; // Adjust modulation depth

// Connect the modulator to the modulation depth
modulator.connect(modulationDepth);

// Function to create an exponential curve for the WaveShaperNode
function createExponentialCurve(steps) {
  const curve = new Float32Array(steps);
  const base = 10; // Adjust the base for desired effect

  for (let i = 0; i < steps; i += 1) {
    const x = (i / (steps - 1)) * 2 - 1;
    curve[i] = base ** x;
  }

  return curve;
}

// Connect the modulation depth to a custom WaveShaperNode
const waveShaper = audioContext.createWaveShaper();
waveShaper.curve = createExponentialCurve(1000); // Adjust the curve for exponential effect
modulationDepth.connect(waveShaper);

// Connect the wave shaper to the carrier oscillator frequency
waveShaper.connect(carrier.frequency);

// Connect the carrier oscillator to the AudioContext's destination (output)
carrier.connect(audioContext.destination);

// Start the oscillators
carrier.start();
modulator.start();

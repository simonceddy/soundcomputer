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

// Create a GainNode for controlling the modulation depth
const modulationDepth = audioContext.createGain();
modulationDepth.gain.value = 200; // Adjust modulation depth

// Connect the modulator to the modulation depth
modulator.connect(modulationDepth);

// Connect the modulation depth to the carrier oscillator frequency
modulationDepth.connect(carrier.frequency);

// Connect the carrier oscillator to the AudioContext's destination (output)
carrier.connect(audioContext.destination);

// Start the oscillators
carrier.start();
modulator.start();

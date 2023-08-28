// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create two oscillators
const oscillator1 = audioContext.createOscillator();
const oscillator2 = audioContext.createOscillator();

// Set their frequencies and types
oscillator1.frequency.value = 440; // Set your desired frequency
oscillator1.type = 'sawtooth'; // You can experiment with different types

oscillator2.frequency.value = 440;
oscillator2.type = 'sawtooth';

// Create a GainNode to control the modulation
const modulationGain = audioContext.createGain();

// Connect the oscillators to the modulation GainNode
oscillator1.connect(modulationGain);
oscillator2.connect(modulationGain);

// Create the output
const output = audioContext.destination;

// Connect the modulation GainNode to the output
modulationGain.connect(output);

// Start the oscillators
oscillator1.start();
oscillator2.start();

// Modulate the gain of the oscillators with an LFO (Low Frequency Oscillator)
const lfo = audioContext.createOscillator();
const lfoGain = audioContext.createGain();

lfo.frequency.value = 2; // Set LFO frequency (controls PWM rate)
lfo.type = 'sine'; // You can experiment with different LFO types

lfo.connect(lfoGain);
lfoGain.gain.value = 0.5; // Set LFO amplitude (controls PWM depth)
lfoGain.connect(modulationGain.gain);

// Start the LFO
lfo.start();

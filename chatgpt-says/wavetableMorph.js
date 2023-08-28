/* eslint-disable no-unused-vars */
import waves from '../src/support/wavetables';

// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an oscillator
const oscillator = audioContext.createOscillator();

const tableSize = 4096; // Adjust the table size as needed

// Function to create a custom morphing curve (wavetable)
function createMorphCurve(
  size = tableSize,
  waveTable1 = waves.triangle,
  waveTable2 = waves.square
) {
  const morphCurve = new Float32Array(tableSize);

  for (let i = 0; i < tableSize; i += 1) {
    const normalizedPosition = i / size;
    const morphedValue = (1 - normalizedPosition)
      * waveTable1[i] + normalizedPosition * waveTable2[i];
    morphCurve[i] = morphedValue;
  }

  return morphCurve;
}
// Create a custom WaveShaperNode for wavetable morphing
const waveshaper = audioContext.createWaveShaper();
const morphCurve = createMorphCurve(tableSize); // Create your custom morphing curve
waveshaper.curve = morphCurve;

// Connect the oscillator to the WaveShaperNode and the destination
oscillator.connect(waveshaper);
waveshaper.connect(audioContext.destination);

// Start the oscillator
oscillator.start();

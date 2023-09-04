/* eslint-disable no-unused-vars */
import Canvas from '../../components/Canvas';

const height = 60;
const width = 90;

const calculateBiquadFilterResponse = (frequency, hz = 1500, q = 1) => {
  const pi = Math.PI;

  const w0 = 2 * pi * (hz / 44100); // Normalize frequency to sample rate of 44100 Hz

  const alpha = Math.sin(w0) / (2 * q);
  const cosW0 = Math.cos(w0);
  const a0 = 1 + alpha;
  // const a1 = -2 * cosW0;
  // const a2 = 1 - alpha;
  const b0 = (1 - cosW0) / 2;
  const b1 = 1 - cosW0;
  const b2 = (1 - cosW0) / 2;

  const wf = (frequency * 2 * pi) / 44100; // Normalize frequency
  const response = (b0 + b1 * Math.cos(wf) + b2 * Math.cos(2 * wf)) / a0;

  return response;
};

function DrawFilter({ hz = 15000, q = 1, type = 'lowpass' }) {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  const draw = (ctx) => {
    const frequencyData = [];
    const numPoints = width;

    for (let i = 0; i < numPoints; i += 1) {
      const frequency = (i / numPoints) * 0.5; // Normalize frequency from 0 to 0.5
      const response = calculateBiquadFilterResponse(frequency, hz, q);
      frequencyData.push({ frequency, response });
    }

    // Draw frequency response curve
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'lightgreen';
    ctx.lineWidth = 4.0;
    ctx.beginPath();

    frequencyData.forEach(({ frequency, response }) => {
      const x = (1 - response) * height;
      const y = frequency * width;
      ctx.lineTo(x, y);
    });

    ctx.stroke();
    // console.log(frequencyData);
  };

  return (
    <div className="bg-gray-700 p-1 rounded border border-slate-500 m-1">
      <Canvas width={width} height={height} draw={draw} />
    </div>
  );
}

export default DrawFilter;

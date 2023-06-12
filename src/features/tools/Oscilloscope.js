/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import audioContext from '../../support/audioContext';

const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

function draw(canvasCtx, width = 150, height = 100) {
  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, width, height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  canvasCtx.beginPath();

  const sliceWidth = (width * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i += 1) {
    const v = dataArray[i] / 128.0;
    const y = (v * height) / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(width, height / 2);
  canvasCtx.stroke();
}

function Oscilloscope() {
  const ref = useRef(null);

  useEffect(() => {
    let setup = false;
    if (!setup && ref.current && ref.current.getContext) {
      const canvasCtx = ref.current.getContext('2d');
    }
    return () => {
      setup = true;
    };
  }, []);
  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
}

export default Oscilloscope;

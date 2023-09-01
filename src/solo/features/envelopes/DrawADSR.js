/* eslint-disable no-unused-vars */
import Canvas from '../../components/Canvas';

const sustPercentage = 16;
const width = 90;
const height = 65;

function DrawADSR({
  attack = 0.05,
  decay = 0.14,
  sustain = 1,
  release = 0.65
}) {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
  */
  const draw = (ctx) => {
    const susY = height - (sustain * height);
    const totalTime = (attack + decay + release) / (1 - sustPercentage / 100);
    const sustWidth = (sustPercentage / 100) * width;
    const attackWidth = (attack / totalTime) * width;
    const decayWidth = (decay / totalTime) * width;
    const releaseWidth = (release / totalTime) * width;
    // console.log(attackWidth, decayWidth, sustWidth, releaseWidth);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'lightgreen';
    ctx.lineWidth = 4.0;
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(attackWidth, 0);
    ctx.lineTo(attackWidth + decayWidth, susY);
    ctx.lineTo(attackWidth + decayWidth + sustWidth, susY);
    ctx.lineTo(attackWidth + decayWidth + sustWidth + releaseWidth, height);
    ctx.stroke();
  };

  return (
    <div className="bg-gray-700 p-1 rounded border border-slate-500 m-1">
      <Canvas width={width} height={height} draw={draw} />
    </div>
  );
}

export default DrawADSR;

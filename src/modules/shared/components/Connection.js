import CableEnd from './CableEnd';

function Connection({
  className = '', style = {}, input = {}, output = {}
}) {
  const ix = Math.round(input.left - 6);
  const iy = Math.round(input.top - 6);
  const ox = Math.round(output.left - 6);
  const oy = Math.round(output.top - 6);

  let w = (ix < ox ? ox - ix : ix - ox);
  let h = iy < oy ? oy - iy : iy - oy;

  if (w < 16) w = 16;
  if (h < 16) h = 16;
  // console.log(h, w);

  return (
    <div
      className={`absolute ${className} col justify-start items-start`}
      // style={{
      //   ...style
      // }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          top: (iy < oy ? input.top : output.top),
          left: (ix < ox ? input.left : output.left),
          width: w,
          height: h,
          pointerEvents: 'none'
        }}
        className="z-40 absolute"
      >
        <line
          x1={(ix <= ox ? 4 : w - 4)}
          y1={(iy <= oy ? 4 : h - 4)}
          x2={(ix < ox ? w - 4 : 4)}
          y2={(iy < oy ? h - 4 : 4)}
          className="z-40"
          style={{
            stroke: style.stroke || 'yellow',
            strokeWidth: '8px',
            pointerEvents: 'none'
          }}
        />
      </svg>
      <CableEnd
        style={{
          ...style,
          top: iy,
          left: ix,
        }}
      />
      <CableEnd
        style={{
          ...style,
          top: oy,
          left: ox,
        }}
      />
    </div>
  );
}

export default Connection;

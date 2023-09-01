import { useEffect, useRef } from 'react';

function Canvas({
  width = 400,
  height = 270,
  draw
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && draw) {
      const ctx = ref.current.getContext('2d');
      draw(ctx);
    }
  }, []);

  return (
    <canvas ref={ref} width={width} height={height} />
  );
}

export default Canvas;

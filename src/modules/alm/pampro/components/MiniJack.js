import { useRef } from 'react';
import JackHole from '../../../shared/components/JackHole';
import CircleSpan from '../../../shared/components/CircleSpan';
import usePatchCable from '../../../shared/hooks/usePatchCable';
import CircleButton from '../../../shared/components/CircleButton';

function MiniJack() {
  const ref = useRef(null);
  const { onClick } = usePatchCable(ref);
  return (
    <CircleButton
      ref={ref}
      onClick={onClick}
      className="col all-center border"
      style={{
        width: '33px',
        height: '33px',
        borderColor: '#929292',
        background: 'radial-gradient(#7f7f7f, #dfdfdf)'
      }}
    >
      <CircleSpan
        className="col all-center border"
        style={{
          width: '25px',
          height: '25px',
          borderColor: '#8d8d8d',
          background: 'radial-gradient(#dcdcdc, #939393)'
        }}
      >
        <JackHole />
      </CircleSpan>
    </CircleButton>
  );
}

export default MiniJack;

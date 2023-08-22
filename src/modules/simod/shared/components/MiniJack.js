/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import CircleButton from '../../../shared/components/CircleButton';
import JackHole from '../../../shared/components/JackHole';
import usePatchCable from '../../../shared/hooks/usePatchCable';

function MiniJack({ className = 'bg-purple-600', isInput = true }) {
  const ref = useRef(null);
  const { onClick } = usePatchCable(ref);
  return (
    <CircleButton
      ref={ref}
      onClick={onClick}
      className={`col all-center border-2 border-slate-60 ${className}`}
      style={{
        width: '25px',
        height: '25px',
      }}
    >
      {}
      <JackHole />
    </CircleButton>
  );
}

export default MiniJack;

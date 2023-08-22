import { useRef } from 'react';
import JackHole from '../../shared/components/JackHole';
import usePatchCable from '../../shared/hooks/usePatchCable';
import CircleButton from '../../shared/components/CircleButton';

function Jack8thInch({ className }) {
  const ref = useRef(null);
  const { onClick } = usePatchCable(ref);
  return (
    <CircleButton
      ref={ref}
      onClick={onClick}
      className={`border border-black bg-[#dcdcdc] col all-center ${className}`}
      style={{
        width: '34px',
        height: '34px',
      }}
    >
      <span
        className="rounded-full border border-black col all-center bg-[#cecece]"
        style={{
          width: '19px',
          height: '19px'
        }}
      >
        <JackHole />
      </span>
    </CircleButton>
  );
}

export default Jack8thInch;

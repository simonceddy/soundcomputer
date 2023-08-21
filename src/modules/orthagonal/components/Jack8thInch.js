import JackHole from '../../shared/components/JackHole';

function Jack8thInch({ className }) {
  return (
    <div
      className={`rounded-full border border-black bg-[#dcdcdc] col all-center ${className}`}
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
    </div>
  );
}

export default Jack8thInch;

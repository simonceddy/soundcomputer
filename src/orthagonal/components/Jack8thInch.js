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
        <span
          className="rounded-full bg-black"
          style={{
            width: '14px',
            height: '14px',
          }}
        />
      </span>
    </div>
  );
}

export default Jack8thInch;

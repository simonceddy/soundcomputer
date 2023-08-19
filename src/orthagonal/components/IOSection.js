function IOSection({ children }) {
  return (
    <div
      style={{
        width: '297px',
        height: '120px'
      }}
      className="row flex-wrap justify-evenly items-start"
    >
      {children}
    </div>
  );
}

export default IOSection;

function TopRow({ children }) {
  return (
    <div
      className="w-full flex flex-row justify-between items-center"
      style={{
        height: '28%'
      }}
    >
      {children}
    </div>
  );
}

export default TopRow;

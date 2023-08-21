function Display({ children }) {
  return (
    <div
      className="border rounded-lg mx-auto col all-center"
      style={{
        backgroundColor: '#2f2f2f',
        borderColor: '#080808',
        width: '101px',
        height: '61px',
      }}
    >
      <div
        className="rounded-sm mx-auto"
        style={{
          backgroundColor: '#472f33',
          width: '92px',
          height: '54px',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Display;

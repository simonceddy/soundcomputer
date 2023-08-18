function PadButtonRow({ children }) {
  return (
    <div className="row justify-evenly items-center w-fit p-2 mx-auto flex-wrap mb-2">
      {children}
    </div>
  );
}

export default PadButtonRow;

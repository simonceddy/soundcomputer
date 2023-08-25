function PadButtonRow({ children }) {
  return (
    <div className="row justify-evenly text-white items-center w-fit px-2 pb-6 pt-3 mx-auto flex-wrap mb-2">
      {children}
    </div>
  );
}

export default PadButtonRow;

function DisplayHeader({ children }) {
  return (
    <div className="row justify-between items-center font-digi text-black bg-teal-400 w-full mb-auto px-1">
      {children}
    </div>
  );
}

export default DisplayHeader;

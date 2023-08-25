function DisplayHeader({ children }) {
  return (
    <div className="row justify-between items-center font-digi bg-black text-teal-200 w-full mb-auto px-1">
      {children}
    </div>
  );
}

export default DisplayHeader;

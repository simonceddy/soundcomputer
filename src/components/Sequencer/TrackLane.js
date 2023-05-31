function TrackLane({ children }) {
  return (
    <div className="w-full flex flex-row justify-start items-center border-slate-400/70 border-b">
      {children}
    </div>
  );
}

export default TrackLane;

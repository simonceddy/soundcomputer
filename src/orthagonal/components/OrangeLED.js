function OrangeLED({ className, active }) {
  return (
    <div className={`${className} rounded-full w-[11px] h-[11px] border border-[#a07f7d] ${active ? 'bg-[#ee8b1e]' : 'bg-[#894d05]'}`} />
  );
}

export default OrangeLED;

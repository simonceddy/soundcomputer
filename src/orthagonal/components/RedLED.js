function RedLED({ className, active }) {
  return (
    <div className={`${className} rounded-full w-[11px] h-[11px] border border-[#a07f7d] ${active ? 'bg-[#f90808]' : 'bg-[#7c0504]'}`} />
  );
}

export default RedLED;

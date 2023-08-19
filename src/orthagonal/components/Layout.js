// 26HP 132.08mm
// 3U 128.5mm
function Layout({ children }) {
  return (
    <div className="w-full h-full col font-sans justify-center items-center bg-black">
      <div className="col justify-center items-center w-[528px] h-[514px] bg-[#afafaf] rounded-sm border border-black">
        {children}
      </div>
    </div>
  );
}

export default Layout;

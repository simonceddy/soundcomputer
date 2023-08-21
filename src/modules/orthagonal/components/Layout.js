// 26HP 132.08mm
// 3U 128.5mm
function Layout({ children }) {
  return (
    <div
      className="col justify-between items-center bg-[#afafaf] rounded-sm border border-black"
      style={{
        width: '529px',
        height: '514px',
      }}
    >
      {children}
    </div>
  );
}

export default Layout;

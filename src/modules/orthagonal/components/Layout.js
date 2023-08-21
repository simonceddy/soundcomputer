// 26HP 132.08mm

import ModuleContainer from '../../shared/components/ModuleContainer';

// 3U 128.5mm
function Layout({ children }) {
  return (
    <ModuleContainer
      hp={26}
      className="col justify-between items-center bg-[#afafaf] rounded-sm border border-black"
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

import ModuleContainer from '../../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={4}
      className="border-slate-300 border col justify-start items-center relative text-white"
      style={{
        background: 'linear-gradient(to bottom, black, darkred, darkblue)'
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

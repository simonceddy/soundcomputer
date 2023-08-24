import ModuleContainer from '../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={6}
      className="col justify-start relative font-mono text-slate-800 items-center border border-slate-800 rounded-sm"
      style={{
        background: 'linear-gradient(to bottom, #aaaaaa, #ffffff)'
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

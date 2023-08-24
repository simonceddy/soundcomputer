import ModuleContainer from '../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={14}
      className="col justify-start relative overflow-hidden font-mono text-slate-100 items-center border border-slate-200 rounded-sm"
      style={{
        background: 'linear-gradient(to bottom, #000000, #000444)'
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

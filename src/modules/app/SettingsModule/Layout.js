import ModuleContainer from '../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={10}
      className="col justify-start relative font-mono text-slate-100 items-center border border-slate-200 rounded-sm"
      style={{
        background: 'linear-gradient(to bottom, #200202, #223232, #320202)',
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

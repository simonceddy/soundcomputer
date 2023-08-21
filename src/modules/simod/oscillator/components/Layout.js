import ModuleContainer from '../../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={12}
      className="col justify-start relative font-mono text-slate-100 items-center border border-slate-200 rounded-sm"
      style={{
        background: 'linear-gradient(to bottom, #000202, #003232, #000202)',
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

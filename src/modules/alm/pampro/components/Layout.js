import ModuleContainer from '../../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={8}
      className="col justify-start font-alm items-center border border-slate-200 rounded-sm"
      style={{
        backgroundColor: '#dedede',
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

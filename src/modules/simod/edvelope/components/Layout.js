import ModuleContainer from '../../../shared/components/ModuleContainer';

function Layout({ children }) {
  return (
    <ModuleContainer
      hp={6}
      className="border-slate-300 border col justify-start items-center relative text-white"
      style={{
        background: 'linear-gradient(to bottom, rgb(19 70 74), rgb(1 34 74), rgb(0 45 145))'
      }}
    >
      {children}
    </ModuleContainer>
  );
}

export default Layout;

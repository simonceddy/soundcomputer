import FMSection from './components/FMSection';
import Layout from './components/Layout';
import ModuleTitle from './components/ModuleTitle';
import Outputs from './components/Outputs';
import PWMSection from './components/PWMSection';
import TuningSection from './components/TuningSection';
import src from '../shared/assets/simod-balls.svg';

function App() {
  return (
    <Layout>
      <ModuleTitle />
      <TuningSection />
      <PWMSection />
      <FMSection />
      <Outputs />
      <img src={src} alt="logo" className="ml-auto mr-2" width={80} height={80} />
    </Layout>
  );
}

export default App;

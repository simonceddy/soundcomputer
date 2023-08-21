import Inputs from './components/Inputs';
import Layout from './components/Layout';
import ModuleTitle from './components/ModuleTitle';
import Outputs from './components/Outputs';
import PWMSection from './components/PWMSection';
import TuningSection from './components/TuningSection';

function App() {
  return (
    <Layout>
      <ModuleTitle />
      <TuningSection />
      <PWMSection />
      <Inputs />
      <Outputs />
    </Layout>
  );
}

export default App;

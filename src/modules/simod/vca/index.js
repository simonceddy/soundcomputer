import Layout from './Layout';
import VCASection from './VCASection';

function VCA() {
  return (
    <Layout>
      <h2 className="font-mono text-4xl">VCA</h2>
      <VCASection />
      <span className="text-2xl">▼</span>
      <VCASection />
      <span className="text-2xl">▼</span>
      <VCASection />
      <span className="text-2xl">▼</span>
      <VCASection />
    </Layout>
  );
}

export default VCA;

import AddSection from './components/AddSection';
import Layout from './components/Layout';
import MultSection from './components/MultSection';
import src from '../shared/assets/simod-balls4.svg';

function Simult() {
  return (
    <Layout>
      <img src={src} alt="logo" className="mx-auto my-4" width={36} height={36} />
      <div className="w-full h-full col justify-start items-center pt-4">
        <MultSection inJackClass="bg-yellow-400" outJackClass="bg-green-400" />
        <span>▼</span>
        <MultSection inJackClass="bg-green-400" outJackClass="bg-red-400" />
        <span>▼</span>
        <MultSection inJackClass="bg-red-400" outJackClass="bg-blue-400" />
        <AddSection inJackClass="bg-pink-400" outJackClass="bg-violet-400" />
      </div>
    </Layout>
  );
}

export default Simult;

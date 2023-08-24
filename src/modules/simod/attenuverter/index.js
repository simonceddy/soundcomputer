import IOSection from './IOSection';
import Layout from './Layout';
import src from '../shared/assets/simod-balls3.svg';

function Attenuverter() {
  return (
    <Layout>
      <h2 className="-rotate-[80deg] text-sky-500/20 text-9xl font-digi font-bold absolute left-[-249px] top-[33%]">Attenuverter</h2>
      <h2 className="-rotate-[80deg] text-lime-500/20 text-9xl font-digi font-bold absolute left-[-239px] top-[33%]">Attenuverter</h2>
      <h2 className="-rotate-[80deg] text-violet-500/20 text-9xl font-digi font-bold absolute left-[-229px] top-[33%]">Attenuverter</h2>
      <span className="h-4" />
      <span className="mb-1 font-mono font-bold">Attenuverter</span>
      <IOSection id={1} backgroundClass="bg-blue-300" sectionBgClass="bg-blue-300/40" />
      <span className="w-[56%] z-10 text-left font-sans">▼</span>
      <IOSection id={1} backgroundClass="bg-green-300" sectionBgClass="bg-green-300/40" />
      <span className="w-[56%] z-10 text-left font-sans">▼</span>
      <IOSection id={1} backgroundClass="bg-yellow-300" sectionBgClass="bg-yellow-300/40" />
      <span className="w-[56%] z-10 text-left font-sans">▼</span>
      <IOSection id={1} backgroundClass="bg-red-300" sectionBgClass="bg-red-300/40" />
      <img src={src} alt="logo" className="ml-auto mb-2 mt-auto mr-2" width={40} height={40} />
    </Layout>
  );
}

export default Attenuverter;

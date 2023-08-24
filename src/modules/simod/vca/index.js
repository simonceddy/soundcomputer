import Layout from './Layout';
import VCASection from './VCASection';
import src from '../shared/assets/simod-balls4.svg';
import Outputs from './Outputs';
import BackgroundDeco from './BackgroundDeco';

const channels = [
  { key: 1, bgClass: 'bg-blue-300', sectionBgClass: 'bg-blue-300/30' },
  { key: 2, bgClass: 'bg-green-300', sectionBgClass: 'bg-green-300/30' },
  { key: 3, bgClass: 'bg-yellow-300', sectionBgClass: 'bg-yellow-300/30' },
  { key: 4, bgClass: 'bg-red-300', sectionBgClass: 'bg-red-300/30' },
];

const lastChannelId = channels.length - 1;

function VCA() {
  return (
    <Layout>
      <h2 className="font-mono font-bold text-cyan-200 my-2 z-10 text-4xl">VCA</h2>
      <BackgroundDeco />
      {channels.map(({ key, bgClass, sectionBgClass }, id) => (
        <VCASection
          id={key}
          key={`vca-channel-${key}-section`}
          bgClass={bgClass}
          sectionBgClass={sectionBgClass}
          trailingArrow={id !== lastChannelId}
        />
      ))}
      <Outputs channels={channels} lastId={lastChannelId} />
      <img src={src} alt="logo" className="mx-auto z-10 mt-auto mb-3" width={40} height={40} />

    </Layout>
  );
}

export default VCA;

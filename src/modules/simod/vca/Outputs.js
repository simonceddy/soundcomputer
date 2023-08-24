import VCAOutput from './VCAOutput';

const outputObjects = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
];

function Outputs({ channels = outputObjects, lastId = 3 }) {
  return (
    <div className="w-[68%] z-10 row justify-between mt-3 rounded-lg p-2 bg-white/20">
      {channels.map(({ key, bgClass, sectionBgClass }, id) => (
        <VCAOutput key={`vca-output-${key}`} bgClass={bgClass} sectionBgClass={sectionBgClass} id={key} trailingArrow={id !== lastId} />
      ))}
    </div>
  );
}

export default Outputs;

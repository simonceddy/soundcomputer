import MiniJack from '../shared/components/MiniJack';

function VCAOutput({
  id, sectionBgClass, bgClass, trailingArrow
}) {
  return (
    <>
      <div key={`vca-output-${id}`} className="col justify-between items-center">
        <span
          className={`mb-0.5 text-xs font-bold text-center rounded-t-lg w-full p-0.5 ${sectionBgClass}`}
        >
          {id}
        </span>
        <MiniJack className={`${bgClass}`} connectionId={`vca-output-${id}`} />
      </div>
      {trailingArrow && (
        <span>➜</span>
      )}
    </>
  );
}

export default VCAOutput;

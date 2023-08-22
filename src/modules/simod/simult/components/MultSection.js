import MiniJack from '../../shared/components/MiniJack';

function MultSection({ inJackClass = '', outJackClass = '' }) {
  return (
    <div className="col all-center font-digi w-[88%] my-2 p-1 rounded-lg bg-white/30">
      <div className="row justify-between items-center">
        <MiniJack className={`${inJackClass} m-1`} />
        <MiniJack className={`${outJackClass} m-1`} />
      </div>
      <div className="row justify-between items-center">
        <MiniJack className={`${outJackClass} m-1`} />
        <MiniJack className={`${outJackClass} m-1`} />
      </div>
    </div>
  );
}

export default MultSection;

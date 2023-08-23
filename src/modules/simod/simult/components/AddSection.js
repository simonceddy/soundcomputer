import MiniJack from '../../shared/components/MiniJack';

function AddSection({ inJackClass = '', outJackClass = '' }) {
  return (
    <div className="col all-center relative font-digi w-[88%] my-2 p-1 rounded-lg bg-gray-700/30">
      <span className="absolute font-mono text-lg m-auto">+</span>
      <div className="row justify-between items-center">
        <MiniJack className={`${inJackClass} m-1`} />
        <MiniJack className={`${inJackClass} m-1`} />
      </div>
      <div className="row justify-between items-center">
        <MiniJack className={`${inJackClass} m-1`} />
        <MiniJack className={`${outJackClass} m-1`} />
      </div>
    </div>
  );
}

export default AddSection;

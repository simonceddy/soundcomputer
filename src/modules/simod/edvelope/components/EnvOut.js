import MiniJack from '../../shared/components/MiniJack';

function EnvOut() {
  return (
    <div className="col justify-between items-center mx-auto">
      <span className="text-xs font-digi mb-0.5">Env</span>
      <MiniJack className="bg-black" />
    </div>
  );
}

export default EnvOut;

import MiniJack from '../../shared/components/MiniJack';

function GateInput() {
  return (
    <div className="col justify-between items-center mx-auto">
      <span className="text-xs font-digi mb-0.5">Gate</span>
      <MiniJack className="bg-white" />
    </div>
  );
}

export default GateInput;

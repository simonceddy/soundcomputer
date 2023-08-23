import { useSelector } from 'react-redux';

function PatchingState() {
  const isPatching = useSelector((s) => s.patch.isPatching);
  return (
    <div className="w-4/5 mx-auto my-2 h-10 text-center p-1 rounded-lg bg-green-400/30 text-2xl text-red-400 font-digi">
      {isPatching ? 'PATCHING' : ''}
    </div>
  );
}

export default PatchingState;

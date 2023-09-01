import { useState } from 'react';

function VCA() {
  const [env, setEnv] = useState(0);
  return (
    <div>
      <button
        type="button"
        className="w-10 h-10 rounded-full col all-center bg-slate-400 active:bg-yellow-300"
        onClick={() => {
          setEnv((env + 1) % 3);
        }}
      >
        {}
      </button>
      <div>
        Env {env + 1}
      </div>
    </div>
  );
}

export default VCA;

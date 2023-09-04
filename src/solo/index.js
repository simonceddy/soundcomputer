import { useState } from 'react';
import App from './App';
import { init } from './audio';

function Solo() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="dark:bg-black bg-yellow-100 text-black w-full h-full col all-center dark:text-white">
      {booted ? (
        <App />
      ) : (
        <button
          type="button"
          className="text-5xl font-mono hover:underline px-4 py-2 border-2 border-slate-500 hover:border-blue-500 active:border-green-500"
          onClick={async () => {
            await init();
            setBooted(true);
          }}
        >
          BEGIN
        </button>
      )}
    </div>
  );
}

export default Solo;

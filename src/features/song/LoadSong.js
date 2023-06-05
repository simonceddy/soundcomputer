import { useEffect, useState } from 'react';
import { getStorageKeys } from '../../util/storage';
import { useStoredSong } from '../../hooks';

function LoadSong() {
  const [loadingKeys, setLoadingKeys] = useState(true);
  const [keyList, setKeyList] = useState(null);
  const { loadSong } = useStoredSong();
  useEffect(() => {
    let setup = false;
    if (!setup && loadingKeys) {
      //
      getStorageKeys()
        .then((keys) => {
          if (keys) {
            setKeyList(keys);
          }
          setLoadingKeys(false);
        })
        .catch(console.error);
    }
    return () => {
      setup = true;
    };
  });
  return (
    <ul className="w-1/2 p-2 bg-slate-300 dark:bg-slate-800 text-teal-800 dark:text-teal-300 flex flex-col justify-start items-start z-50 list-disc rounded-md">
      {keyList && keyList.map((k) => (
        <li
          role="presentation"
          className="hover:underline"
          onClick={() => {
            loadSong(k);
          }}
          key={k}
        >{k}
        </li>
      ))}
    </ul>
  );
}

export default LoadSong;

import { useDispatch } from 'react-redux';
import { setSongName } from '../features/song/songSlice';

const worker = new Worker('worklets/randomName.js');

function useRandomName() {
  const dispatch = useDispatch();
  worker.onmessage = ({ data }) => {
    if (data) {
      dispatch(setSongName(data));
      // worker.terminate();
    }
  };

  return () => { worker.postMessage(1); };
}

export default useRandomName;

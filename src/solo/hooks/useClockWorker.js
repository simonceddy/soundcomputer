/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { clockWorker } from '../audio';
import tickHandler from '../features/sequencer/tickHandler';

function useClockWorker() {
  const { running } = useSelector((s) => s.sequencer);
  const worker = useMemo(clockWorker, []);

  useEffect(() => {
    if (running) {
      worker.port.postMessage('start');
      worker.port.onmessage = (e) => {
        if (e.data?.type === 'tick') {
          tickHandler(() => {
            // TODO
            console.log('Simon! Please schedule me!');
          }, 24);
        }
      };
    } else {
      worker.port.postMessage('stop');
      worker.port.onmessage = () => {};
    }
  }, [running]);
  return {};
}

export default useClockWorker;

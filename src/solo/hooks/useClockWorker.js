/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import tickHandler from '../features/sequencer/tickHandler';
import { clockWorker, init } from '../audio';

function useClockWorker() {
  const { running } = useSelector((s) => s.sequencer);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    if (worker) {
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
    }
  }, [running, worker]);

  useEffect(() => {
    const initClock = async () => {
      const w = await clockWorker();
      setWorker(w);
    };

    initClock();
  }, []);
  return {};
}

export default useClockWorker;

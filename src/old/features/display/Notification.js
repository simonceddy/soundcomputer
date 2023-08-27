import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from './displaySlice';

function Notification() {
  const { booted, notify } = useSelector((s) => ({
    displayMode: s.kernel.displayMode,
    booted: s.kernel.booted,
    notify: s.display.notify
  }));
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    if (notify !== null) {
      setTimeoutId(setTimeout(() => dispatch(setNotification(null)), 4000));
    }
  }, [notify]);

  return (
    <div
      role="presentation"
      onClick={() => {
        if (timeoutId) {
          clearTimeout(timeoutId);
          setTimeoutId(null);
          dispatch(setNotification(null));
        }
      }}
      className="dark:bg-slate-900 bg-slate-300 dark:text-blue-200 text-blue-900 p-1 border-2 border-blue-200 dark:border-blue-900 overflow-ellipsis overflow-hidden whitespace-nowrap m-1 h-10 w-40 text-base font-digi"
    >
      {booted ? notify : '...'}
    </div>
  );
}

export default Notification;

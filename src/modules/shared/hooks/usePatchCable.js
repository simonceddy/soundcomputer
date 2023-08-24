/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection, setPending, togglePatching } from '../../app/patchSlice';

const defaultOptions = {
  offsetX: 0,
  offsetY: 0,
  key: null,
};

export default function usePatchCable(ref, options = defaultOptions) {
  const opts = { ...defaultOptions, ...options };
  const dispatch = useDispatch();
  const { isPatching, pending, connections } = useSelector((s) => s.patch);
  const [rect, setRect] = useState(null);

  const onClick = () => {
    if (rect) {
      // console.log(connections);
      if (!isPatching) {
        dispatch(togglePatching());
        dispatch(setPending({ top: rect.top + opts.offsetY, left: rect.left + opts.offsetX }));
      } else if (rect.top !== (pending.top + opts.offsetY)
        || rect.left !== (pending.left + opts.offsetX)
      ) {
        dispatch(addConnection({
          output: { top: rect.top + opts.offsetY, left: rect.left + opts.offsetX },
          key: `${opts.key || connections.length}-${Date.now()}`
        }));
      } else {
        dispatch(setPending(null));
        dispatch(togglePatching());
      }
    } else console.log('no rect!');
  };

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return {
    onClick
  };
}

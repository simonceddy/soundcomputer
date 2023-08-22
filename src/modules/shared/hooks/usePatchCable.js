/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection, setPending, togglePatching } from '../../app/patchSlice';

export default function usePatchCable(ref) {
  const dispatch = useDispatch();
  const { isPatching, pending } = useSelector((s) => s.patch);
  const [rect, setRect] = useState(null);

  const onClick = () => {
    if (rect) {
      console.log(rect);
      if (!isPatching) {
        dispatch(togglePatching());
        dispatch(setPending({ top: rect.top, left: rect.left }));
      } else if (rect.top !== pending.top || rect.left !== pending.left) {
        dispatch(addConnection({ top: rect.top, left: rect.left }));
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

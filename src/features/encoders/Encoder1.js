/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';

import RotaryKnob from '../../components/RotaryKnob/index';
import { useEncoder1 } from '../../hooks';

function Encoder1() {
  const { props, handler } = useEncoder1();
  console.log(props);
  return (
    <RotaryKnob
      {...props}
      onChange={handler}
      className="h-10 w-10"
    />
  );
}

export default Encoder1;

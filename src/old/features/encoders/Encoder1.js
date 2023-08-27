/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';

import RotaryKnob from '../../components/RotaryKnob/index';
import { useEncoder } from '../../hooks';

function Encoder1() {
  const { props, handler, value } = useEncoder('encoder1');
  // console.log(value);
  return (
    <RotaryKnob
      {...props}
      val={value || props.defaultVal || props.minVal || 0}
      onChange={handler}
      className="h-10 w-10"
    />
  );
}

export default Encoder1;

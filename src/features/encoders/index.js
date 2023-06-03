/* eslint-disable no-unused-vars */
import RotaryKnob from '../../components/RotaryKnob';
import Encoder1 from './Encoder1';
import Encoder2 from './Encoder2';
import Encoder3 from './Encoder3';
import Encoder4 from './Encoder4';

function Encoders() {
  return (
    <div className="flex flex-row justify-between items-center w-11/12">
      <Encoder1 />
      <Encoder2 />
      <Encoder3 />
      <Encoder4 />
    </div>
  );
}

export default Encoders;

/* eslint-disable no-unused-vars */
import RotaryKnob from '../../components/RotaryKnob';
import Encoder1 from './Encoder1';

function Encoders() {
  return (
    <div className="flex flex-row justify-between items-center w-11/12">
      <Encoder1 />
      <RotaryKnob
        className="h-10 w-10"
      />
      <RotaryKnob
        className="h-10 w-10"
      />
      <RotaryKnob
        className="h-10 w-10"
      />
    </div>
  );
}

export default Encoders;

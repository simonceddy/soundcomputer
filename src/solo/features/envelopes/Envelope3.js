/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { updateEnvelope3 } from './envelopesSlice';
import Envelope from '../../components/Envelope';

function Envelope3() {
  const adsr = useSelector((s) => s.envelopes.envelope3);
  const dispatch = useDispatch();
  return (
    <Envelope title="Env 3" adsr={adsr} onChange={(v) => dispatch(updateEnvelope3(v))} />
  );
}

export default Envelope3;

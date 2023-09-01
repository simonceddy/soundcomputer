/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { updateEnvelope2 } from './envelopesSlice';
import Envelope from '../../components/Envelope';

function Envelope2() {
  const adsr = useSelector((s) => s.envelopes.envelope2);
  const dispatch = useDispatch();
  return (
    <Envelope title="Env 2" adsr={adsr} onChange={(v) => dispatch(updateEnvelope2(v))} />
  );
}

export default Envelope2;

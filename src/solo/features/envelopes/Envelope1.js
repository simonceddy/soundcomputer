/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { updateEnvelope1 } from './envelopesSlice';
import Envelope from '../../components/Envelope';

function Envelope1() {
  const adsr = useSelector((s) => s.envelopes.envelope1);
  const dispatch = useDispatch();
  return (
    <Envelope title="VCA Envelope" adsr={adsr} onChange={(v) => dispatch(updateEnvelope1(v))} />
  );
}

export default Envelope1;

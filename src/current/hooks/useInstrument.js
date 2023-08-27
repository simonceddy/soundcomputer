import { useSelector } from 'react-redux';

export default function useInstrument(trackId) {
  const settings = useSelector((s) => s.instruments.settings[trackId]);
}

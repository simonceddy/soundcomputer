import { useSelector } from 'react-redux';
import PadButton from '../../components/PadButton';
import PadButtonRow from '../../components/PadButtonRow';

const padObjects = [];

(new Int8Array(4)).forEach((_v, i) => {
  const page = [];
  (new Int8Array(16)).forEach((_n, id) => {
    page.push({
      key: (id + 1) + (i * 16)
    });
  });
  padObjects.push(page);
});

function Pads() {
  const page = useSelector((s) => s.pads.page);
  // console.log(padObjects, page);
  return (
    <PadButtonRow>
      {page && padObjects[page - 1] && padObjects[page - 1].map(({ key }) => (
        <PadButton key={`pg-${page}-pad-${key}`} className="text-white bg-slate-800">
          {key}
        </PadButton>
      ))}
    </PadButtonRow>
  );
}

export default Pads;

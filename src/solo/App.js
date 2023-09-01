import GateButton from './components/GateButton';
import Envelopes from './features/envelopes';
import Filters from './features/filters';
import VCA from './features/vca';

async function playAudio() {
  console.log('eeee!');
}

function App() {
  return (
    <div className="dark:bg-black bg-yellow-100 text-black w-full h-full col all-center dark:text-white">
      <div className="row justify-between items-center">
        <Filters />
        <VCA />
      </div>
      <Envelopes />
      <GateButton onClick={playAudio} />
    </div>
  );
}

export default App;

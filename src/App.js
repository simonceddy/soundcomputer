import Display from './components/Display';
import RotaryKnob from './components/RotaryKnob';

function App() {
  return (
    <div className="w-full h-full text-5xl bg-black font-mono font-bold text-teal-400 flex flex-col justify-center items-center">
      <Display />
      <RotaryKnob />
    </div>
  );
}

export default App;

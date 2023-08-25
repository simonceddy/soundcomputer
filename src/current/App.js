import Display from './components/Display';
import Layout from './components/Layout';
import Title from './components/Title';
import Controllers from './features/controllers';
import Controls from './features/controls';
import LeftColButtons from './features/leftColButtons';
import Pads from './features/pads';
import RightColButtons from './features/rightColButtons';
import SystemControls from './features/systemControls';

function App() {
  return (
    <Layout>
      <div className="row justify-between items-start px-4 pt-6 pb-2 w-full flex-1">
        <LeftColButtons />
        <div className="flex-1 h-full col justify-between items-center">
          <SystemControls />
          <Display>
            <Title />
          </Display>
          <Controllers />
        </div>
        <RightColButtons />
      </div>
      <Controls />
      <Pads />
      {/* Display */}
      {/* Controls */}
      {/* Pad Buttons */}
    </Layout>
  );
}

export default App;

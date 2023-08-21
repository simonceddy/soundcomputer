import Display from './components/Display';
import Inputs from './components/Inputs';
import Layout from './components/Layout';
import ModuleTitle from './components/ModuleTitle';
import Outputs from './components/Outputs';
import SelectorKnob from './components/SelectorKnob';
import StartButton from './components/StartButton';

function Pam() {
  return (
    <Layout>
      <ModuleTitle />
      <Inputs />
      <Display />
      <div
        className="row justify-between items-start pt-1.5 pb-2.5"
        style={{
          height: '106px',
          width: '150px',
        }}
      >
        <div
          className="col justify-between h-full items-center flex-1"
        >
          <span className="text-sm">Start/Stop</span>
          <StartButton />
        </div>
        <div
          className="col justify-between h-full items-center flex-1"
        >
          <span className="text-sm">
            ⤻|
          </span>
          <SelectorKnob />
        </div>
      </div>
      <Outputs />
    </Layout>
  );
}

export default Pam;

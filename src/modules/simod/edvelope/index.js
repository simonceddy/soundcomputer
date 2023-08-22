import Layout from './components/Layout';
import ModuleTitle from './components/ModuleTitle';
import src from '../shared/assets/simod-balls2.svg';
import MainSection from './components/MainSection';
import AttackKnob from './components/AttackKnob';
import './Edvelope.css';
import HoldKnob from './components/HoldKnob';
import DecayKnob from './components/DecayKnob';
import SustainKnob from './components/SustainKnob';
import ReleaseKnob from './components/ReleaseKnob';
import GateInput from './components/GateInput';
import EnvOut from './components/EnvOut';

function Edvelope() {
  return (
    <Layout>
      <ModuleTitle />
      <MainSection>
        <AttackKnob />
        <HoldKnob />
        <DecayKnob />
        <SustainKnob />
        <ReleaseKnob />
      </MainSection>
      <div className="row all-center w-[88%] mx-auto mt-7">
        <div className="row all-center mr-0.5 rounded-lg bg-white/30 p-0.5">
          <span className="p-0.5 mt-auto">
            ➩
          </span>
          <GateInput />
        </div>
        <div className="row all-center ml-0.5 rounded-lg bg-black/30 p-0.5">
          <EnvOut />
          <span className="p-0.5 mt-auto">
            ➩
          </span>
        </div>
      </div>
      <img src={src} alt="logo" className="absolute right-auto left-auto bottom-4" width={30} height={30} />
    </Layout>
  );
}

export default Edvelope;

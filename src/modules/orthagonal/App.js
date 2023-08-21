import './webcomponents';
import BottomRowContent from './components/BottomRowContent';
import IndexSection from './components/IndexSection';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import MainSectionLeft from './components/MainSectionLeft';
import MainSectionRight from './components/MainSectionRight';
import MiddleRowContent from './components/MiddleRowContent';
import SmoothButton from './components/SmoothButton';
import TableSwitch from './components/TableSwitch';
import TopRowContent from './components/TopRowContent';
import VoltageSection from './components/VoltageSection';
import TracksIO from './features/tracks/TracksIO';
import ClockSection from './components/ClockSection';
import ResetSection from './components/ResetSection';
import CommitSection from './components/CommitSection';
import TitleRow from './components/TitleRow';
import Logo from './components/Logo';

function App() {
  return (
    <Layout>
      <TitleRow />
      <MainContent>
        <TopRowContent>
          {}
          <div className="w-[299px] pl-[12px] row justify-between items-center pr-[13px]">
            <TableSwitch />
            <SmoothButton />
            <IndexSection />
          </div>
          <VoltageSection />
        </TopRowContent>
        <MiddleRowContent>
          <MainSectionLeft />
          <MainSectionRight />
        </MiddleRowContent>
        <BottomRowContent>
          <div className="h-full col justify-start items-center ml-[18px] mr-[13px]">
            <ClockSection />
            <ResetSection />
          </div>
          <TracksIO />
          <div className="mr-[7px]">
            <CommitSection />
          </div>
        </BottomRowContent>
      </MainContent>
      <Logo />
    </Layout>
  );
}

export default App;

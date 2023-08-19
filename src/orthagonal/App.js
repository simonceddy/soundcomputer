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

function App({ children }) {
  return (
    <Layout>
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
          <TracksIO />
        </BottomRowContent>
      </MainContent>
      {children}
    </Layout>
  );
}

export default App;

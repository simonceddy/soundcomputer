import CircleDiv from '../../../shared/components/CircleDiv';
import JackHole from '../../../shared/components/JackHole';

function MiniJack() {
  return (
    <CircleDiv
      className="col all-center border-2 border-slate-600 bg-purple-600"
      style={{
        width: '25px',
        height: '25px',
      }}
    >
      {}
      <JackHole />
    </CircleDiv>
  );
}

export default MiniJack;

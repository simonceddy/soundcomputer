import CircleDiv from '../../../shared/components/CircleDiv';
import JackHole from '../../../shared/components/JackHole';

function MiniJack({ className = 'bg-purple-600' }) {
  return (
    <CircleDiv
      className={`col all-center border-2 border-slate-60 ${className}`}
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

import JackHole from '../../../shared/components/JackHole';
import CircleDiv from '../../../shared/components/CircleDiv';

function MiniJack() {
  return (
    <CircleDiv
      className="col all-center border"
      style={{
        width: '33px',
        height: '33px',
        borderColor: '#929292',
        background: 'radial-gradient(#7f7f7f, #dfdfdf)'
      }}
    >
      <CircleDiv
        className="col all-center border"
        style={{
          width: '25px',
          height: '25px',
          borderColor: '#8d8d8d',
          background: 'radial-gradient(#dcdcdc, #939393)'
        }}
      >
        <JackHole />
      </CircleDiv>
    </CircleDiv>
  );
}

export default MiniJack;

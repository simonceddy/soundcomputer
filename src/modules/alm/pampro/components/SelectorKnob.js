import CircleDiv from '../../../shared/components/CircleDiv';

function SelectorKnob() {
  return (
    <CircleDiv
      className="border col all-center m-auto"
      style={{
        width: '64px',
        height: '64px',
        borderColor: '#6c6c6c',
        backgroundColor: '#111111'
      }}
    >
      <CircleDiv
        className="border col all-center"
        style={{
          width: '56px',
          height: '56px',
          borderColor: '#686868',
          backgroundColor: '#151515'
        }}
      >
        <CircleDiv
          className="border col all-center"
          style={{
            width: '46px',
            height: '46px',
            borderColor: '#26739c',
            backgroundColor: '#007bbf',
          }}
        />

      </CircleDiv>
    </CircleDiv>
  );
}

export default SelectorKnob;

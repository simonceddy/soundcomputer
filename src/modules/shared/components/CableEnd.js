import CircleDiv from './CircleDiv';

function CableEnd({ children, className = '', style = {} }) {
  return (
    <CircleDiv
      className={`${className} border absolute z-50 border-slate-500`}
      style={{
        width: '20px',
        height: '20px',
        ...style
      }}
    >
      {children}
    </CircleDiv>
  );
}

export default CableEnd;

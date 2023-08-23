import CircleButton from './CircleButton';

function CableEnd({
  children, className = '', style = {}, removeCable
}) {
  return (
    <CircleButton
      onDoubleClick={removeCable}
      className={`${className} border absolute z-50 border-slate-500`}
      style={{
        width: '20px',
        height: '20px',
        ...style
      }}
    >
      {children}
    </CircleButton>
  );
}

export default CableEnd;

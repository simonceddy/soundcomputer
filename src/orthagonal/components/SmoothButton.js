import RedLED from './RedLED';
import SquareButton from './SquareButton';
import TextLabel from './TextLabel';

function SmoothGf() {
  return (
    <svg viewBox="0 0 500 132" xmlns="http://www.w3.org/2000/svg">
      <polyline
        style={{
          stroke: 'rgb(0, 0, 0)', fill: 'none', strokeWidth: '12px', strokeLinecap: 'round', strokeLinejoin: 'round'
        }}
        points="25 115 70 115 70 25 145 25 145 75 200 75"
      />
      <polyline
        style={{
          stroke: 'rgb(0, 0, 0)', strokeWidth: '12px', strokeLinecap: 'round', strokeLinejoin: 'round'
        }}
        points="225 75 245 75 245 60 270 75 245 90 245 75"
      />
      <polyline
        style={{
          stroke: 'rgb(0, 0, 0)', fill: 'none', strokeWidth: '12px', strokeLinecap: 'round', strokeLinejoin: 'round'
        }}
        points="289.136 118.279 340 25 405 25 465 75"
      />
    </svg>
  );
}

function SmoothButton({ onClick, active = false }) {
  return (
    <div className="col justify-start items-start w-[68px] relative">
      <div className="absolute top-[-5px] left-[-7px]" style={{ width: '50px', height: '10px' }}>
        <SmoothGf />
      </div>
      <div className="row justify-start items-start pt-[11px]">
        <SquareButton id="smooth-button" buttonClassName="bg-[#527ef7]" onClick={onClick} />
        <span className="relative col justify-start items-center flex-1 mt-[3px]">
          <TextLabel className="lowercase text-3xs ml-[4px]">Smooth</TextLabel>
          <span className="border border-black w-[20px] absolute left-0 top-[71%]" />
          <RedLED active={active} className="z-10 ml-[4px]" />
        </span>
      </div>
    </div>
  );
}

export default SmoothButton;

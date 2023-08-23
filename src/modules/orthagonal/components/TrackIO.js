import TextLabel from './TextLabel';
import Jack8thInch from './Jack8thInch';

function TrackIO({ track = 1 }) {
  return (
    <div
      className="col justify-start items-center relative"
      style={{
        width: '142px',
        height: '55px',
        flex: '1 1 142px'
      }}
    >
      <span
        className="absolute top-[6px] border-t-2 border-x-2 border-black z-0 rounded-tl-[6px] rounded-tr-[6px]"
        style={{
          height: '7px',
          width: '135px',
        }}
      />
      <span className="text-xxs absolute px-0.5 bg-[#afafaf] font-semibold z-10 top-0">TRACK {track}</span>
      <div className="row w-full justify-around items-center">
        <div className="col justify-start items-center col" style={{ height: '46px' }}>
          <div className="mx-auto">
            <TextLabel className="text-3xs">
              CV-A
            </TextLabel>
          </div>
          <Jack8thInch
            connectionId={`${track}-cv-a-jack`}
            offsetX={5}
            offsetY={5}
            className="absolute bottom-0"
          />
        </div>
        <div className="col justify-start items-center col" style={{ height: '46px' }}>
          <div className="mx-auto">
            <TextLabel className="text-3xs">
              CV-B
            </TextLabel>
          </div>
          <Jack8thInch
            connectionId={`${track}-cv-a-jack`}
            offsetX={5}
            offsetY={5}
            className="absolute bottom-0"
          />
        </div>
        <div className="col justify-start items-center col" style={{ height: '46px' }}>
          <div className="mx-auto">
            <TextLabel className="text-3xs">
              GATE
            </TextLabel>
          </div>
          <Jack8thInch
            connectionId={`${track}-gate-jack`}
            offsetX={5}
            offsetY={5}
            className="absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
}

export default TrackIO;

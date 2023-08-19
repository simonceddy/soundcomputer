import TextLabel from './TextLabel';
import Jack8thInch from './Jack8thInch';

function TrackIO({ label = '' }) {
  return (
    <div
      className="col justify-start items-center"
      style={{
        width: '142px',
        height: '55px',
        flex: '1 1 142px'
      }}
    >
      <span className="text-xxs">{label}</span>
      <div className="row w-full justify-evenly items-center">
        <div className="col justify-start items-center">
          <div className="mx-auto">
            <TextLabel>
              CV-A
            </TextLabel>
          </div>
          <Jack8thInch />
        </div>
        <div className="col justify-start items-center">
          <div className="mx-auto">
            <TextLabel>
              CV-B
            </TextLabel>
          </div>
          <Jack8thInch />
        </div>
        <div className="col justify-start items-center">
          <div className="mx-auto">
            <TextLabel>
              GATE
            </TextLabel>
          </div>
          <Jack8thInch />
        </div>
      </div>
    </div>
  );
}

export default TrackIO;

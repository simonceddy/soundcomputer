import DisplayValueContainer from './DisplayValueContainer';

function LFOSection({
  rate = 1, sync = false, wave = 'sine', id, label = 'LFO 1'
}) {
  return (
    <div className="row justify-between items-center m-1 p-1 border border-teal-400 rounded-sm" id={id}>
      <div className="h-full py-3 mr-2 flex-1 col all-center bg-teal-400 text-black">
        <span className="-rotate-90">
          {label}
        </span>
      </div>
      <div className="col">
        <div className="row justify-between items-center">
          <span className="mr-1">
            Rate:
          </span>
          <DisplayValueContainer className="mr-2">
            {rate}
          </DisplayValueContainer>
          <span className="">
            Sync: {sync ? 'On' : 'Off'}
          </span>
        </div>
        <div className="row justify-start items-center">
          <span className="mr-1">
            Waveform:
          </span>
          <span>
            {wave}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LFOSection;

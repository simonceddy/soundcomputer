import audioContext from '../../support/audioContext';

const gainNode = audioContext.createGain();

function MasterGain() {
  console.log(gainNode);
  return (
    <div>
      {}
    </div>
  );
}

export default MasterGain;

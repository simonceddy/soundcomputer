const counter = [];
(new Int8Array(16)).forEach((_v, id) => {
  counter.push(id);
});

function SmallSequenceRow({ steps = {}, page = 0, currentStep = 0 }) {
  return (
    <div className="row">
      {counter.map((id) => (
        <div
          className={`w-4 h-4 m-0.5 text-xl col all-center border border-teal-400 ${steps[id + (page * 16)]?.active ? 'bg-teal-400 text-black' : 'bg-black text-teal-400'}`}
          key={`${id}`}
        >
          {currentStep === id + (page * 16) ? '•' : ''}
        </div>
      ))}
    </div>
  );
}

export default SmallSequenceRow;

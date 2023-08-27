function DisplaySelector({
  opts, value, onChange, id, label
}) {
  return (
    <label htmlFor={id}>
      {label && (
        <span className="text-lg font-bold mr-2">
          {label}
        </span>
      )}
      <select
        id={id}
        onChange={onChange}
        value={value}
        className="bg-black text-teal-200 text-xl font-bold p-1"
      >
        {opts.map((v, key) => (
          <option value={v.value} key={`instrument-type-opt-${key}`} label={v.label} />
        ))}
      </select>
    </label>
  );
}

export default DisplaySelector;

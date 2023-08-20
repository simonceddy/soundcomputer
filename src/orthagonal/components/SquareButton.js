import TextLabel from './TextLabel';

function SquareButton({
  children, id, onClick, buttonClassName = '', labelClassName = 'mx-auto', label, className = ''
}) {
  return (
    <div className={`col justify-between items-center ${className}`}>
      {label && <TextLabel className={`uppercase ${labelClassName} text-xxs`}>{label}</TextLabel>}
      <span className="w-[35px] h-[35px] col all-center bg-[#4c4c4c] border border-black rounded">
        <button type="button" id={id} onClick={onClick} className={`${buttonClassName} border border-black hover:border-slate-500 rounded w-[31px] h-[31px]`}>
          {children}
        </button>
      </span>
    </div>
  );
}

export default SquareButton;

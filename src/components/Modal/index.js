function Modal({ children, onClose }) {
  return (
    <div
      className="absolute w-full h-full z-40 col justify-center items-center bg-slate-500/40"
      role="presentation"
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export default Modal;

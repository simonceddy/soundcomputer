import { SoundIcon } from './icons';
import './GateButton.css';

function GateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-20 gate-button gate-button-outer col all-center w-20 rounded-full text-white border border-teal-400 active:text-yellow-300"
      type="button"
    >
      <span className="m-auto rounded-full col gate-button-inner all-center h-16 w-16">
        <SoundIcon />
      </span>
    </button>
  );
}

export default GateButton;

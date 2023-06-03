import { useSelector } from 'react-redux';

function SongEditor() {
  const song = useSelector((s) => s.song);
  return (
    <div>
      {song.name}
    </div>
  );
}

export default SongEditor;

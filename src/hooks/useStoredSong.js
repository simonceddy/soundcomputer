/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { load } from '../util/storage';
import { setAll } from '../features/sequencer/sequencerSlice';
import { setSongMetaData, setSongName, setSongTempo } from '../features/song/songSlice';
import { setNotification } from '../features/display/displaySlice';

export default function useStoredSong() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadSong = (name) => {
    dispatch(setNotification('Loading...'));
    load(name)
      .then((result) => {
        const {
          sequencer, name: songName, tempo, created, modified
        } = result;
        if (result && sequencer) {
          dispatch(setAll(sequencer));
          dispatch(setSongName(songName || name));
          dispatch(setSongMetaData({
            created: created && created.getTime ? created.getTime() : null,
            modified: modified && modified.getTime ? modified.getTime() : null,
          }));
          dispatch(setSongTempo(tempo));
          dispatch(setNotification(`Loaded ${songName || name}`));

          setLoading(false);
        } else {
          setError({ message: `Could not locate ${name}.` });
        }
      })
      .catch(setError);
  };

  return {
    loadSong,
    error,
    loading,
  };
}

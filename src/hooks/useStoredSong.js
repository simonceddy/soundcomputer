/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { load } from '../util/storage';
import { setAll } from '../features/sequencer/sequencerSlice';
import { setSongName } from '../features/song/songSlice';

export default function useStoredSong() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadSong = (name) => {
    load(name)
      .then((result) => {
        if (result && result.sequencer) {
          dispatch(setAll(result.sequencer));
          dispatch(setSongName(result.name || name));
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

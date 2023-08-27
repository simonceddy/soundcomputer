/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { initTracks } from '../app/support';

function initState() {
  const list = {};
  initTracks((_v, id) => {
    list[id] = {};
  });
  return {
    list,
    selectedTrackKey: 0
  };
}

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: initState,
  reducers: {
    setSelectedTrack(state, action) {
      state.selectedTrackKey = action.payload;
    }
  },
});

export const { setSelectedTrack } = tracksSlice.actions;

export const selectSelectedTrackKey = (s) => s.tracks.selectedTrackKey;

export default tracksSlice.reducer;

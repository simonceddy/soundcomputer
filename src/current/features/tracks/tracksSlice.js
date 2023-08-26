/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

function initTracks() {
  const list = {};
  (new Int8Array(8)).forEach((_v, id) => {
    list[id] = {};
  });
  return {
    list,
    selectedTrackKey: 0
  };
}

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: initTracks,
  reducers: {
    setSelectedTrack(state, action) {
      state.selectedTrackKey = action.payload;
    }
  },
});

export const { setSelectedTrack } = tracksSlice.actions;

export default tracksSlice.reducer;

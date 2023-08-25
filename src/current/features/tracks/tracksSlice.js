import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    selectedTrackKey: 1
  },
  reducers: {
    setSelectedTrack(state, action) {
      state.selectedTrackKey = action.payload;
    }
  },
});

export const { setSelectedTrack } = tracksSlice.actions;

export default tracksSlice.reducer;

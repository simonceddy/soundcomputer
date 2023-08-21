import { createSlice } from '@reduxjs/toolkit';

export const pamSlice = createSlice({
  name: 'pam',
  initialState: {
    bpm: 120
  },
  reducers: {
    setBpm(state, action) {
      state.bpm = action.payload;
    }
  },
});

export const { setBpm } = pamSlice.actions;

export default pamSlice.reducer;

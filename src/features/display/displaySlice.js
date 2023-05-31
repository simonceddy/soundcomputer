import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'displaySlice',
  initialState: {
    header: 'SoundComputer'
  },
  reducers: {
    setHeader(state, action) {
      state.header = action.payload;
    }
  },
});

export const { setHeader } = displaySlice.actions;

export default displaySlice.reducer;

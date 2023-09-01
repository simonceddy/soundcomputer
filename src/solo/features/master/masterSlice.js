import { createSlice } from '@reduxjs/toolkit';

export const masterSlice = createSlice({
  name: 'master',
  initialState: { gain: 1 },
  reducers: {
    setGain(state, action) {
      state.gain = action.payload;
    }
  },
});

export const {
  setGain,
} = masterSlice.actions;

export default masterSlice.reducer;

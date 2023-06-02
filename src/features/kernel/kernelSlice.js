import { createSlice } from '@reduxjs/toolkit';

export const kernelSlice = createSlice({
  name: 'kernelSlice',
  initialState: {
    displayMode: 0,
    padMode: 0,
    booted: false,
  },
  reducers: {
    setDisplayMode: (state, action) => {
      state.displayMode = Number(action.payload);
    },
    bootUp(state) {
      state.booted = true;
    }
  },
});

export const { setDisplayMode, bootUp } = kernelSlice.actions;

export default kernelSlice.reducer;

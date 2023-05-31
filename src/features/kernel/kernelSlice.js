import { createSlice } from '@reduxjs/toolkit';

export const kernelSlice = createSlice({
  name: 'kernelSlice',
  initialState: {
    displayMode: 0
  },
  reducers: {
    setDisplayMode: (state, action) => {
      state.displayMode = Number(action.payload);
    }
  },
});

export const { setDisplayMode } = kernelSlice.actions;

export default kernelSlice.reducer;

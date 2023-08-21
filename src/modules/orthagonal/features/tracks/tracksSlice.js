import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  1: {},
  2: {},
  3: {},
  4: {},
};

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
  },
});

// export const { } = tracksSlice.actions;

export default tracksSlice.reducer;

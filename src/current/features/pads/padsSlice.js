import { createSlice } from '@reduxjs/toolkit';

export const padsSlice = createSlice({
  name: 'pads',
  initialState: {
    page: 1,
    mode: 0,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setMode(state, action) {
      state.mode = action.payload;
    }
  },
});

export const {
  setPage, setMode
} = padsSlice.actions;

export default padsSlice.reducer;

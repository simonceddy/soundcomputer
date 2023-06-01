import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'displaySlice',
  initialState: {
    header: 'SoundComputer',
    notify: null,
  },
  reducers: {
    setHeader(state, action) {
      state.header = action.payload;
    },
    setNotification(state, action) {
      state.notify = action.payload;
    }
  },
});

export const { setHeader, setNotification } = displaySlice.actions;

export default displaySlice.reducer;

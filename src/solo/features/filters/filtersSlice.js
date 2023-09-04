import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter1: {
      type: 'lowpass', frequency: 15000, Q: 0.707, bypass: false, modAmt: 0,
    },
    filter2: {
      type: 'highpass', frequency: 20, Q: 0.707, bypass: false, modAmt: 0,
    },
  },
  reducers: {
    updateFilter1(state, action) {
      state.filter1 = { ...state.filter1, ...action.payload };
    },
    updateFilter2(state, action) {
      state.filter2 = { ...state.filter2, ...action.payload };
    }
  },
});

export const { updateFilter1, updateFilter2 } = filtersSlice.actions;

export default filtersSlice.reducer;

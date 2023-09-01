import { createSlice } from '@reduxjs/toolkit';

const filterObj = {
  type: 'lowpass',
  frequency: 15000,
  Q: 1,
  bypass: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter1: { ...filterObj },
    filter2: { ...filterObj },
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

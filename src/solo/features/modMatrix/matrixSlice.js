import { createSlice } from '@reduxjs/toolkit';

const mappings = {
  vca: 'env1',
  filter1: 'env2',
  filter2: 'env2',
};

// TODO better

export const matrixSlice = createSlice({
  name: 'matrix',
  initialState: {
    mappings: { ...mappings },
  },
  reducers: {
    setMapping(state, action) {
      if (state.mappings[action.payload.destination]) {
        state.mappings[action.payload.destination] = action.payload.source;
      }
    }
  },
});

export const { setMapping } = matrixSlice.actions;

export default matrixSlice.reducer;

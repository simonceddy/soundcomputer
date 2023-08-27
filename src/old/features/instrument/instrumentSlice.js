/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import '../../support/instruments';

function initState() {
  const state = {
    assignments: {}
  };
  (new Int8Array(8)).forEach((_v, k) => {
    state.assignments[k + 1] = 0;
  });

  return state;
}

export const instrumentSlice = createSlice({
  name: 'instrumentSlice',
  initialState: initState,
  reducers: {
    assignToLane(state, action) {
      // console.log(action);
      state.assignments[action.payload.laneId] = action.payload.instrumentId;
    }
  },
});

export const { assignToLane } = instrumentSlice.actions;

export default instrumentSlice.reducer;

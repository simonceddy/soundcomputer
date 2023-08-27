import { createSlice } from '@reduxjs/toolkit';
import { INSTRUMENT_NONE } from './support';

function initState() {
  const assignments = {};
  (new Int8Array(8)).forEach((_v, id) => {
    assignments[id] = INSTRUMENT_NONE;
  });

  return {
    assignments
  };
}

export const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState: initState,
  reducers: {
    setAssignment(state, action) {
      state.assignments[action.payload.track] = action.payload.instrument;
    }
  },
});

export const {
  setAssignment
} = instrumentsSlice.actions;

export default instrumentsSlice.reducer;

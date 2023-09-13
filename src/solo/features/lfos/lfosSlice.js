import { createSlice } from '@reduxjs/toolkit';

export const lfosSlice = createSlice({
  name: 'lfos',
  initialState: {
    lfo1: {
      frequency: 1,
      type: 'sine',
    },
    lfo2: {
      frequency: 1,
      type: 'sine',
    },
  },
  reducers: {
    setLFO1Type(state, action) {
      state.lfo1.type = action.payload;
    },
    setLFO2Type(state, action) {
      state.lfo2.type = action.payload;
    },
    setLFO1Frequency(state, action) {
      state.lfo1.frequency = action.payload;
    },
    setLFO2Frequency(state, action) {
      state.lfo2.frequency = action.payload;
    },
  },
});

export const {
  setLFO1Frequency,
  setLFO1Type,
  setLFO2Frequency,
  setLFO2Type
} = lfosSlice.actions;

export default lfosSlice.reducer;

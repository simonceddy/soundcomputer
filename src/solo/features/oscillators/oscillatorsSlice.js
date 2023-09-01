import { createSlice } from '@reduxjs/toolkit';

export const oscillatorsSlice = createSlice({
  name: 'oscillators',
  initialState: {
    oscillator1: {
      sineGain: 0.5,
      triGain: 0.5,
      sawGain: 0.5,
      squareGain: 0.5,
      master: 1,
    }
  },
  reducers: {
    setOscillator1MasterGain(state, action) {
      state.oscillator1.master = action.payload;
    },
    setOscillator1SineGain(state, action) {
      state.oscillator1.sineGain = action.payload;
    },
    setOscillator1TriGain(state, action) {
      state.oscillator1.triGain = action.payload;
    },
    setOscillator1SawGain(state, action) {
      state.oscillator1.sawGain = action.payload;
    },
    setOscillator1SquareGain(state, action) {
      state.oscillator1.squareGain = action.payload;
    },
  },
});

export const {
  setOscillator1MasterGain,
  setOscillator1SawGain,
  setOscillator1SineGain,
  setOscillator1SquareGain,
  setOscillator1TriGain,
} = oscillatorsSlice.actions;

export default oscillatorsSlice.reducer;

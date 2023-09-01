import { createSlice } from '@reduxjs/toolkit';

const envelopeObj = {
  attack: 0.01,
  decay: 0.1,
  sustain: 1,
  release: 0.3
};

export const envelopesSlice = createSlice({
  name: 'envelopes',
  initialState: {
    envelope1: { ...envelopeObj },
    envelope2: { ...envelopeObj },
    envelope3: { ...envelopeObj },
  },
  reducers: {
    updateEnvelope1(state, action) {
      state.envelope1 = { ...state.envelope1, ...action.payload };
    },
    updateEnvelope2(state, action) {
      state.envelope2 = { ...state.envelope2, ...action.payload };
    },
    updateEnvelope3(state, action) {
      state.envelope3 = { ...state.envelope3, ...action.payload };
    },
  },
});

export const { updateEnvelope1, updateEnvelope2, updateEnvelope3 } = envelopesSlice.actions;

export default envelopesSlice.reducer;

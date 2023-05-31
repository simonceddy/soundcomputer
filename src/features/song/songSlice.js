import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'songSlice',
  initialState: {
    name: 'New Song',
    tempo: 120,
  },
  reducers: {
    setSongName: (state, action) => {
      state.name = action.payload;
    },
    setSongTempo: (state, action) => {
      state.tempo = Number(action.payload);
    }
  },
});

export const { setSongName, setSongTempo } = songSlice.actions;

export default songSlice.reducer;

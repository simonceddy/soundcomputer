import { createSlice } from '@reduxjs/toolkit';

const newSongName = `NewSong-${Date.now()}`;

export const songSlice = createSlice({
  name: 'songSlice',
  initialState: {
    name: newSongName,
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

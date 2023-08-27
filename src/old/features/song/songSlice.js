import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'songSlice',
  initialState: () => ({
    name: null,
    tempo: 120,
    metaData: {
      created: new Date().getTime(),
      modified: null
    }
  }),
  reducers: {
    setSongName: (state, action) => {
      state.name = action.payload;
    },
    setSongTempo: (state, action) => {
      state.tempo = Number(action.payload);
    },
    setSongMetaData: (state, action) => {
      state.metaData = action.payload;
    }
  },
});

export const { setSongName, setSongTempo, setSongMetaData } = songSlice.actions;

export default songSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    cableAlpha: 0.6
  },
  reducers: {
    setCableAlpha(state, action) {
      state.cableAlpha = action.payload;
    }
  },
});

export const { setCableAlpha } = settingsSlice.actions;

export default settingsSlice.reducer;

export const selectCableOpacity = (state) => state.settings.cableOpacity;

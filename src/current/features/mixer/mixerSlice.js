import { createSlice } from '@reduxjs/toolkit';
import { initTracks } from '../app/support';

function initState() {
  const channels = {};
  initTracks((_v, id) => {
    channels[id] = {
      gain: 0,
      pan: 0,
    };
  });

  return {
    channels,
    master: {
      gain: 0,
    }
  };
}

export const mixerSlice = createSlice({
  name: 'mixer',
  initialState: initState,
  reducers: {
    updateChannel(state, action) {
      state.channels[action.payload.id] = {
        ...state.channels[action.payload.id],
        ...action.payload.data
      };
    }
  },
});

export const {
  updateChannel
} = mixerSlice.actions;

export default mixerSlice.reducer;

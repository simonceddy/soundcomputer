import { createSlice } from '@reduxjs/toolkit';

export const patchSlice = createSlice({
  name: 'patch',
  initialState: {
    pending: null,
    connections: [],
    isPatching: false,
  },
  reducers: {
    addConnection(state, action) {
      state.connections.push({ in: state.pending, out: action.payload });
      state.pending = null;
      state.isPatching = false;
    },
    removeConnection(state, action) {
      state.connections = state.connections.filter((v) => v.key !== action.payload);
    },
    togglePatching(state) {
      state.isPatching = !state.isPatching;
    },
    setPending(state, action) {
      state.pending = action.payload;
    }
  },
});

export const {
  addConnection,
  removeConnection,
  togglePatching,
  setPending
} = patchSlice.actions;

export default patchSlice.reducer;

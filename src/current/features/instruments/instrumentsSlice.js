import { createSelector, createSlice } from '@reduxjs/toolkit';
import { INSTRUMENT_NONE, defaultSettings } from './support';
import { initTracks } from '../app/support';
import { selectSelectedTrackKey } from '../tracks/tracksSlice';

function initState() {
  const assignments = {};
  const settings = {};
  initTracks((_v, id) => {
    assignments[id] = INSTRUMENT_NONE;
    settings[id] = {};
  });

  return {
    assignments,
    settings
  };
}

export const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState: initState,
  reducers: {
    setAssignment(state, action) {
      state.assignments[action.payload.track] = action.payload.instrument;
      state.settings[action.payload.track] = defaultSettings[action.payload.instrument] || {};
    },
    updateSettings(state, action) {
      state.settings[action.payload.track] = {
        ...state.settings[action.payload.track],
        ...action.payload.settings
      };
    }
  },
});

export const {
  setAssignment,
  updateSettings
} = instrumentsSlice.actions;

export const selectAssignments = (s) => s.instruments.assignments;
export const selectSettings = (s) => s.instruments.settings;

export const selectCurrentInstrument = createSelector([
  selectSelectedTrackKey, selectAssignments, selectSettings
], (selectedTrackKey, assignments, settings) => ({
  instrument: assignments[selectedTrackKey],
  settings: settings[selectedTrackKey],
}));

export default instrumentsSlice.reducer;

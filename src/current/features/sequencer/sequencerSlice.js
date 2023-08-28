import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectSelectedTrackKey } from '../tracks/tracksSlice';
import {
  initSequencer,
  randomizeTrack as randSeq,
  randomizeStep as randStep
} from './support';

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState: initSequencer,
  reducers: {
    setSelectedStep(state, action) {
      state.selectedStep = action.payload;
    },
    toggleStep(state, action) {
      state.tracks[action.payload.track]
        .steps[action.payload.step].active = !state.tracks[action.payload.track]
          .steps[action.payload.step].active;
    },
    setNextStep(state, action) {
      state.tracks[action.payload.track].currentStep = action.payload.step;
    },
    advanceAllSteps(state, action) {
      const keys = Object.keys(state.tracks);
      keys.forEach((k) => {
        state.tracks[k].currentStep = action.payload[k] !== undefined
          ? action.payload[k]
          : state.tracks[k].currentStep;
      });
    },
    resetAll(state) {
      const keys = Object.keys(state.tracks);
      keys.forEach((k) => {
        state.tracks[k].currentStep = state.tracks[k].start || 0;
      });
    },
    randomizeTrack(state, action) {
      const track = state.tracks[action.payload];
      state.tracks[action.payload] = randSeq(track);
    },
    randomizeStep(state, action) {
      const step = state.tracks[action.payload.track]?.steps[action.payload.step];
      if (step) {
        state.tracks[action.payload.track].steps[action.payload.step] = randStep(step);
      }
    },
    setTrackStart(state, action) {
      state.tracks[action.payload.track].start = action.payload.start;
    },
    setTrackEnd(state, action) {
      state.tracks[action.payload.track].end = action.payload.end;
    },
    updateStep(state, action) {
      const step = state.tracks[action.payload.track]?.steps[action.payload.step];
      if (step) {
        state.tracks[action.payload.track].steps[action.payload.step] = {
          ...step,
          ...action.payload.data
        };
      }
    },
    setTrackDirection(state, action) {
      state.tracks[action.payload.track].direction = action.payload.direction;
    }
  },
});

export const {
  setSelectedStep,
  toggleStep,
  setNextStep,
  advanceAllSteps,
  resetAll,
  randomizeTrack,
  randomizeStep,
  setTrackEnd,
  setTrackStart,
  updateStep,
  setTrackDirection
} = sequencerSlice.actions;

export default sequencerSlice.reducer;

export const selectSeqTracks = (s) => s.sequencer.tracks;

export const selectCurrentSeqTrack = createSelector(
  [selectSelectedTrackKey, selectSeqTracks],
  (key, tracks) => tracks[key]
);

export const selectCurrentSeqTrackStart = createSelector(
  [selectCurrentSeqTrack],
  (track) => track.start
);

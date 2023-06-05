/* eslint-disable no-unused-vars */
import { createListenerMiddleware } from '@reduxjs/toolkit';

const saveConfigListener = createListenerMiddleware({});

saveConfigListener.startListening({
  // actionCreator: setSongTempo,
  effect: (action) => {
    // console.log(`bpm changed to ${action.payload}`);
  },
});

export default saveConfigListener;

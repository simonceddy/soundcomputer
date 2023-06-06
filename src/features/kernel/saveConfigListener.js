/* eslint-disable no-unused-vars */
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setConfigVal } from './kernelSlice';
import { saveConfig } from '../../util/storage';

const saveConfigListener = createListenerMiddleware({});

saveConfigListener.startListening({
  actionCreator: setConfigVal,
  effect: async (action, api) => {
    try {
      await saveConfig(api.getState().kernel.config);
      // console.log('config updated!');
    } catch (e) {
      console.error(e);
    }
  },
});

export default saveConfigListener;

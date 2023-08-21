import { configureStore } from '@reduxjs/toolkit';
import pam from './pamSlice';

const store = configureStore({
  reducer: {
    pam
  }
});

export default store;

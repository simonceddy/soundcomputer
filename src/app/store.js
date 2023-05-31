import { configureStore } from '@reduxjs/toolkit';
import song from '../features/song/songSlice';
import kernel from '../features/kernel/kernelSlice';

export const store = configureStore({
  reducer: {
    song,
    kernel
  },
});

import { configureStore } from '@reduxjs/toolkit';
import breakingBadReducer from '../features/breakingBadApp/breakingBadSlice';

export const store = configureStore({
  reducer: {
    characters: breakingBadReducer,
  },
  // middleware: 
});

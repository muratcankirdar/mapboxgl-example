import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './map';

export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

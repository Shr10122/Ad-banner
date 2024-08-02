import { configureStore } from '@reduxjs/toolkit';
import bannersReducer from './banner-slice';

const store = configureStore({
  reducer: {
    banners: bannersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { configureStore } from '@reduxjs/toolkit';
import { idReducer, tokenReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    id: idReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

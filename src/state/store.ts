import { configureStore } from '@reduxjs/toolkit';
import { idReducer, tokenReducer } from './authSlice';
import { userInfoReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    id: idReducer,
    user: userInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

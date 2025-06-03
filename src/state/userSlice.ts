import { createSlice } from '@reduxjs/toolkit';

const userInfoInitialValue = {
  id: null,
  name: null,
  email: null,
  password: null,
  headline: null,
  avatUrl: null,
};

const userInfoSlice = createSlice({
  name: 'user',
  initialState: userInfoInitialValue,
  reducers: {
    setUserInfo: (state, action) => {
      state = { ...action.payload };
    },
    clearUserInfo: (state) => {
      state = userInfoInitialValue;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;

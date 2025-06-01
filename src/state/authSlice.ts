import { createSlice } from '@reduxjs/toolkit';

const tokenInitialValue = {
  value: null,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: tokenInitialValue,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;

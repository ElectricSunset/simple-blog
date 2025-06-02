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

const idInitialValue = {
  value: null,
};

const idSlice = createSlice({
  name: 'id',
  initialState: idInitialValue,
  reducers: {
    setId: (state, action) => {
      state.value = action.payload;
    },
    clearId: (state) => {
      state.value = null;
    },
  },
});

export const { setId, clearId } = idSlice.actions;
export const idReducer = idSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {},
  reducers: {},
});

export const postReducer = postSlice.reducer;

import { authApi } from '@/features/auth/api';
import { AuthState } from '@/features/auth/types';
import { RootState } from '@/lib/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return (
          authApi.endpoints.register.matchFulfilled(action) ||
          authApi.endpoints.login.matchFulfilled(action)
        );
      },
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.user = payload.user;
      }
    );
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const authReducer = authSlice.reducer;

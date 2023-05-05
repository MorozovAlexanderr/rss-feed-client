import { api } from '@/api';
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
  reducers: {
    logoutUser: () => ({ user: null, accessToken: null }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return (
          api.endpoints.register.matchFulfilled(action) ||
          api.endpoints.login.matchFulfilled(action)
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

export const { logoutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;

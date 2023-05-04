import { createApi } from '@reduxjs/toolkit/query/react';
import { User } from '@/features/auth/types';
import { customBaseQuery } from '@/lib/query';

type UserResponse = {
  user: User;
  accessToken: string;
};

type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

export const authApi = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<UserResponse, RegisterRequest>({
      query(credentials) {
        return { url: 'auth/register', method: 'POST', body: credentials };
      },
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query(credentials) {
        return { url: 'auth/login', method: 'POST', body: credentials };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

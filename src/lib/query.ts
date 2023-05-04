import { RootState } from '@/lib/store';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query';

type CustomError = {
  data: {
    message: string;
  };
  status: number;
};

export const customBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, CustomError, object>;

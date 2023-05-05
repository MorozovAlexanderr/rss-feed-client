import {
  LoginRequest,
  RegisterRequest,
  UserResponse,
} from '@/features/auth/types';
import {
  GetPostsRequest,
  Post,
  PostCreationParams,
  PostsPagination,
} from '@/features/post/types';
import { customBaseQuery } from '@/lib/query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: customBaseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    register: build.mutation<Response, RegisterRequest>({
      query(credentials) {
        return { url: 'auth/register', method: 'POST', body: credentials };
      },
    }),
    login: build.mutation<UserResponse, LoginRequest>({
      query(credentials) {
        return { url: 'auth/login', method: 'POST', body: credentials };
      },
    }),
    getPosts: build.query<PostsPagination, GetPostsRequest>({
      query: ({ page, search, sortDir }) => {
        return {
          url: `/posts`,
          params: { page, limit: 10, search, sortDir },
        };
      },
      providesTags: (result) =>
        result
          ? result.docs.map(({ _id }) => ({ type: 'Posts', id: _id }))
          : ['Posts'],
    }),
    addPost: build.mutation<Post, PostCreationParams>({
      query(body) {
        return {
          url: `posts`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Posts'],
    }),
    getPost: build.query<Post, string>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
    updatePost: build.mutation<Post, Pick<Post, '_id'> & PostCreationParams>({
      query: ({ _id, ...patch }) => ({
        url: `posts/${_id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: build.mutation<{ success: boolean }, string>({
      query(id) {
        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = api;

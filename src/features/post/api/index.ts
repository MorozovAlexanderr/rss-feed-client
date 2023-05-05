import { PostsPagination, SortDir } from '@/features/post/types';
import { customBaseQuery } from '@/lib/query';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

type PostsRequest = {
  page: number;
  search: string;
  sortDir: SortDir;
};

export const postApi = createApi({
  baseQuery: customBaseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<PostsPagination, PostsRequest>({
      query: ({ page, search, sortDir }) => {
        return {
          url: `/posts`,
          params: { page, limit: 10, search, sortDir },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.docs.map(
                ({ _id }) => ({ type: 'Posts', id: _id } as const)
              ),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
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

export const { useGetPostsQuery, useDeletePostMutation } = postApi;

export type Post = {
  _id: string;
  title: string;
  creator: string;
  body: string;
  date: string;
};

export type PostsPagination = {
  docs: Post[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
};

export type GetPostsRequest = {
  page: number;
  search: string;
  sortDir: SortDir;
};

export type PostCreationParams = {
  creator: string;
  title: string;
  body: string;
}

export enum SortDir {
  Asc = 'asc',
  Desc = 'desc',
}

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

export enum SortDir {
  Asc = 'asc',
  Desc = 'desc',
}

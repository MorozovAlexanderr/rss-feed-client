import { useGetPostsQuery } from '@/features/post/api';
import { PostsPagination, SortDir } from '@/features/post/types';
import { useDebounce } from '@/hooks/useDebounce';
import { ReactNode, createContext, useState } from 'react';

type PostsManageContextParams = {
  posts: PostsPagination | undefined;
  isFetching: boolean;
  search: string;
  sortDir: SortDir;
  onChangeSearch: (value: string) => void;
  onChangeSortDir: (value: SortDir) => void;
  onChangePage: (value: number) => void;
};

export const PostsManageContext = createContext<PostsManageContextParams>({
  posts: undefined,
  isFetching: false,
  search: '',
  sortDir: SortDir.Desc,
  onChangeSearch: () => {
    //
  },
  onChangeSortDir: () => {
    //
  },
  onChangePage: () => {
    //
  },
});

type PostsFiltersProviderProps = {
  children: ReactNode;
};

const PostsManegeProvider = ({ children }: PostsFiltersProviderProps) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [sortDir, setSortDir] = useState<SortDir>(SortDir.Desc);

  const debouncedSearch = useDebounce<string>(search, 500);

  const { data: posts, isFetching } = useGetPostsQuery({
    page,
    search: debouncedSearch,
    sortDir,
  });

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
    setPage(1); // reset page when search is changed
  };

  const handleSortChange = (newSortDir: SortDir) => {
    setSortDir(newSortDir);
    setPage(1); // reset page when sortDir is changed
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <PostsManageContext.Provider
      value={{
        posts,
        isFetching,
        search,
        sortDir,
        onChangeSearch: handleSearchChange,
        onChangeSortDir: handleSortChange,
        onChangePage: handlePageChange,
      }}
    >
      {children}
    </PostsManageContext.Provider>
  );
};

export default PostsManegeProvider;

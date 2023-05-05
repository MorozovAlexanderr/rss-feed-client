import { useGetPostsQuery } from '@/features/post/api';
import { PostsPagination, SortDir } from '@/features/post/types';
import { useDebounce } from '@/hooks/useDebounce';
import { ReactNode, createContext, useState } from 'react';

type PostsManageContextParams = {
  posts: PostsPagination | undefined;
  isFetching: boolean;
  currentPage: number;
  search: string;
  sortDir: SortDir;
  onChangeSearch: (value: string) => void;
  onChangeSortDir: (value: SortDir) => void;
  onChangePage: (value: number) => void;
};

export const PostsManageContext = createContext<PostsManageContextParams>({
  posts: undefined,
  isFetching: false,
  currentPage: 1,
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [sortDir, setSortDir] = useState<SortDir>(SortDir.Desc);

  const debouncedSearch = useDebounce<string>(search, 500);

  const { data: posts, isFetching } = useGetPostsQuery({
    page: currentPage,
    search: debouncedSearch,
    sortDir,
  });

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
    setCurrentPage(1); // reset page when search is changed
  };

  const handleSortChange = (newSortDir: SortDir) => {
    setSortDir(newSortDir);
    setCurrentPage(1); // reset page when sortDir is changed
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <PostsManageContext.Provider
      value={{
        posts,
        isFetching,
        currentPage,
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

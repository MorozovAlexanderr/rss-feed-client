import Picker from '@/components/UI/Picker';
import SearchField from '@/components/UI/SerachField';
import { Box, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useContext } from 'react';
import { SortDir } from '@/features/post/types';
import { PostsManageContext } from '@/features/post/providers/PostsManageProvider';

const PostsFilters = () => {
  const { search, sortDir, onChangeSearch, onChangeSortDir } =
    useContext(PostsManageContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeSearch(event.target.value);
  };

  const handleSortingChange = (event: SelectChangeEvent<unknown>) => {
    onChangeSortDir(event.target.value as SortDir);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <SearchField
        value={search}
        sx={{ width: 400, mr: 2 }}
        onChange={handleSearch}
      />
      <Picker
        value={sortDir}
        label="Show"
        sx={{ width: 200 }}
        options={[
          { label: 'Newest', value: SortDir.Desc },
          { label: 'Oldest', value: SortDir.Asc },
        ]}
        onChange={handleSortingChange}
      />
    </Box>
  );
};

export default PostsFilters;

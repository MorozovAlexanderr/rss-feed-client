import PostsFilters from '@/features/post/components/PostsFilters';
import PostsList from '@/features/post/components/PostsList';
import PostsManageProvider from '@/features/post/providers/PostsManageProvider';
import { Box } from '@mui/material';

const Posts = () => {
  return (
    <PostsManageProvider>
      <PostsFilters />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PostsList />
      </Box>
    </PostsManageProvider>
  );
};

export default Posts;

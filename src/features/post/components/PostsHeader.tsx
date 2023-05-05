import PostsFilters from '@/features/post/components/PostsFilters';
import { Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const PostsHeader = () => {
  return (
    <Grid container justifyContent="space-between" my={4}>
      <PostsFilters />
      <Link to="/posts/create">
        <Button variant="outlined" sx={{ height: '100%' }}>
          Create
        </Button>
      </Link>
    </Grid>
  );
};

export default PostsHeader;

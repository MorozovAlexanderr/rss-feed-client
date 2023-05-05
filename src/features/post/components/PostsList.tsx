import { useContext } from 'react';
import PostDetails from '@/features/post/components/PostDetails';
import { Grid, Pagination, Skeleton } from '@mui/material';
import { PostsManageContext } from '@/features/post/providers/PostsManageProvider';

const ListLoader = () => {
  return (
    <>
      {[...Array(10).fill(null)].map((_, idx) => (
        <Skeleton key={idx} variant="rounded" height={107} />
      ))}
    </>
  );
};

const PostsList = () => {
  const { posts, currentPage, isFetching, onChangePage } =
    useContext(PostsManageContext);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    onChangePage(page);
  };

  console.log(posts?.page);

  return (
    <>
      <Grid container direction="column" gap={2}>
        {isFetching ? (
          <ListLoader />
        ) : (
          posts?.docs.map((post) => (
            <PostDetails
              key={post._id}
              id={post._id}
              title={post.title}
              creator={post.creator}
              date={post.date}
            />
          ))
        )}
      </Grid>
      <Pagination
        page={currentPage}
        count={posts?.totalPages}
        size="large"
        sx={{ my: 4, width: 'fit-content' }}
        onChange={handlePageChange}
      />
    </>
  );
};

export default PostsList;

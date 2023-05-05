import PostsHeader from '@/features/post/components/PostsHeader';
import PostsList from '@/features/post/components/PostsList';
import PostsManageProvider from '@/features/post/providers/PostsManageProvider';

const Posts = () => {
  return (
    <PostsManageProvider>
      <PostsHeader />
      <PostsList />
    </PostsManageProvider>
  );
};

export default Posts;

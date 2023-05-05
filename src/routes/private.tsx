import AddPost from '@/pages/AddPost';
import Posts from '@/pages/Posts';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="posts" element={<Posts />} />
      <Route path="posts/create" element={<AddPost />} />
      <Route path="*" element={<Navigate replace to="posts" />} />
    </Routes>
  );
};

export default PrivateRoutes;

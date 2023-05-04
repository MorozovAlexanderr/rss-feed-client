import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
      <Route path="*" element={<Navigate replace to="login" />} />
    </Routes>
  );
};

export default PublicRoutes;

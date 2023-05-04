import { useAuth } from '@/hooks/useAuth';
import PrivateRoutes from '@/routes/private';
import PublicRoutes from '@/routes/public';

const AppRouter = () => {
  const auth = useAuth();

  return auth.user ? <PrivateRoutes /> : <PublicRoutes />;
};

export default AppRouter;

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { useAuth } from '@/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/features/auth/slice';
import { useNavigate } from 'react-router-dom';

type HideOnScrollProps = {
  window?: () => Window;
  children: React.ReactElement;
};

const HideOnScroll = (props: HideOnScrollProps) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin UI
            </Typography>
            {auth.user ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  );
};

export default Header;

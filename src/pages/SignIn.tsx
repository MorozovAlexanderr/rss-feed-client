import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Link as MuiLink,
  CssBaseline,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { UserSignInParams } from '@/features/auth/types';
import Form from '@/components/Form/Form';
import InputField from '@/components/Form/InputField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoginMutation } from '@/features/auth/api';

const SignIn = () => {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleFormSubmit = async (data: UserSignInParams) => {
    try {
      await login(data).unwrap();
      navigate('/posts');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Form<UserSignInParams> onSubmit={handleFormSubmit}>
        {({ control }) => (
          <>
            <InputField name="email" control={control} label="Email address" />
            <InputField name="password" control={control} label="Password" />

            {error && 'data' in error ? (
              <Typography mt={1} color="red">
                {error.data.message}
              </Typography>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign In'
              )}
            </Button>
            <MuiLink
              component={RouterLink}
              to="/register"
              variant="body2"
              sx={{ display: 'block', textAlign: 'center' }}
            >
              {"Don't have an account? Sign Up"}
            </MuiLink>
          </>
        )}
      </Form>
    </Box>
  );
};

export default SignIn;

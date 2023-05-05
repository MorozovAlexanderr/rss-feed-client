import Form from '@/components/Form/Form';
import InputField from '@/components/Form/InputField';
import { UserSignUpParams } from '@/features/auth/types';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useRegisterMutation } from '@/features/auth/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleFormSubmit = async (data: UserSignUpParams) => {
    try {
      await register(data).unwrap();
      navigate('/posts');
    } catch (err) {
      console.error(error);
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
        Sign up
      </Typography>
      <Form<UserSignUpParams> onSubmit={handleFormSubmit}>
        {({ control }) => (
          <>
            <InputField name="username" control={control} label="Name" />
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
                'Sign Up'
              )}
            </Button>
            <MuiLink
              component={RouterLink}
              to="/login"
              variant="body2"
              sx={{ display: 'block', textAlign: 'center' }}
            >
              {'Already have an account? Sign In'}
            </MuiLink>
          </>
        )}
      </Form>
    </Box>
  );
};

export default SignUp;

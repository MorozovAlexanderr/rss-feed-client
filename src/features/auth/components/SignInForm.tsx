import {
  Button,
  CircularProgress,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import * as yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { UserSignInParams } from '@/features/auth/types';
import Form from '@/components/Form/Form';
import InputField from '@/components/Form/InputField';
import { useLoginMutation } from '@/api';
import { useYupValidationResolver } from '@/hooks/useYupValidationResolver';

const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const resolver = useYupValidationResolver(validationSchema);

  const handleSubmit = async (data: UserSignInParams) => {
    try {
      await login(data).unwrap();
      navigate('/posts');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form<UserSignInParams> onSubmit={handleSubmit} options={{ resolver }}>
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
  );
};

export default SignInForm;

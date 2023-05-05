import Form from '@/components/Form/Form';
import InputField from '@/components/Form/InputField';
import { UserSignUpParams } from '@/features/auth/types';
import {
  Button,
  CircularProgress,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '@/api';
import * as yup from 'yup';
import { useYupValidationResolver } from '@/hooks/useYupValidationResolver';

const validationSchema = yup.object({
  username: yup.string().min(3).required('Required field'),
  email: yup.string().email().required('Required field'),
  password: yup.string().required('Required filed'),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const resolver = useYupValidationResolver(validationSchema);

  const handleSubmit = async (data: UserSignUpParams) => {
    try {
      await register(data).unwrap();
      navigate('/posts');
    } catch (err) {
      console.error(error);
    }
  };

  return (
    <Form<UserSignUpParams> onSubmit={handleSubmit} options={{ resolver }}>
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
  );
};

export default SignUpForm;

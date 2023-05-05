import { Box } from '@mui/material';
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      {children(methods)}
    </Box>
  );
};

export default Form;

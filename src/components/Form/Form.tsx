import { Box } from '@mui/material';
import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  options?: UseFormProps<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, unknown>>({
  options,
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ ...options });

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

import { TextField, TextFieldProps } from '@mui/material';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

type InputFieldProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    fieldProps?: TextFieldProps;
  };

const InputField = <TFormValues extends FieldValues>({
  name,
  control,
  label,
  fieldProps,
}: InputFieldProps<TFormValues>) => {
  const {
    field: { ref, value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField
      value={value}
      name={name}
      label={label}
      margin="normal"
      required
      fullWidth
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      onChange={onChange}
      {...fieldProps}
    />
  );
};

export default InputField;

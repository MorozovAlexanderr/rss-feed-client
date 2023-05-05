import { TextField, TextFieldProps } from '@mui/material';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

type TextareaFieldProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    fieldProps?: TextFieldProps;
  };

const TextareaField = <TFormValues extends FieldValues>({
  name,
  control,
  label,
  fieldProps,
}: TextareaFieldProps<TFormValues>) => {
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
      multiline
      fullWidth
      rows={10}
      required
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      onChange={onChange}
      {...fieldProps}
    />
  );
};

export default TextareaField;

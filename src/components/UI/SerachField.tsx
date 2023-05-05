import { TextField, TextFieldProps } from '@mui/material';

const SearchField = (props: TextFieldProps) => {
  const { label = 'Search field', variant = 'filled', ...rest } = props;

  return <TextField label={label} variant={variant} {...rest} />;
};

export default SearchField;

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';

interface PickerProps extends SelectProps {
  label: string;
  options: { label: string; value: string | number }[];
}

const Picker = ({ label, options, ...rest }: PickerProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="picker-label">{label}</InputLabel>
      <Select value="asc" labelId="picker-label" label={label} {...rest}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Picker;

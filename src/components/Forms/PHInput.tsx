import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
interface IPHInputProps {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
}
const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth = true,
  sx,
  placeholder,
  required,
}: IPHInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          placeholder={placeholder}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHInput;

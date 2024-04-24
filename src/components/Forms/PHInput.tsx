import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
interface IPHInputProps {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
}
const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth = true,
}: IPHInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default PHInput;

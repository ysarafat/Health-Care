import PHModal from "@/components/shared/PHModal/PHModal";
import { TextField } from "@mui/material";
import React, { FC } from "react";
type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal: FC<TModalProps> = ({ open, setOpen }) => {
  return (
    <PHModal open={open} setOpen={setOpen} title={"Create Specialties"}>
      <TextField></TextField>
    </PHModal>
  );
};

export default SpecialistModal;

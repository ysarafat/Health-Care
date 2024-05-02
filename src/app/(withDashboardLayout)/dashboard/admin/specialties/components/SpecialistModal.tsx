import PHFileUploader from "@/components/Forms/PHFileUplodaer";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React, { FC } from "react";
import { FieldValues } from "react-hook-form";
type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal: FC<TModalProps> = ({ open, setOpen }) => {
  const handleCreateSpecialty = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <PHModal open={open} setOpen={setOpen} title={"Create A New Specialty"}>
      <PHForm onSubmit={handleCreateSpecialty}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name={"file"} label={"Upload Image"} />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create{" "}
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;

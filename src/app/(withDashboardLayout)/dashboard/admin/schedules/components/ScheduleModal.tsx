import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React, { FC } from "react";
import { FieldValues } from "react-hook-form";
type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ScheduleModal: FC<TModalProps> = ({ open, setOpen }) => {
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title={"Create Schedule"}>
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 2, width: "100%" }}>
          Create{" "}
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;

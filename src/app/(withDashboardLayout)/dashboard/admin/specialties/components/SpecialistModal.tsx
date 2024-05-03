import PHFileUploader from "@/components/Forms/PHFileUplodaer";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React, { FC } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal: FC<TModalProps> = ({ open, setOpen }) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleCreateSpecialty = async (values: FieldValues) => {
    const data = modifyPayload(values);
    console.log(data);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error?.message);
    }
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
        <Button type="submit" sx={{ mt: 2, width: "100%" }}>
          Create{" "}
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;

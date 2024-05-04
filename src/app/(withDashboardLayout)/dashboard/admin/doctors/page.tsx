"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default DoctorPage;

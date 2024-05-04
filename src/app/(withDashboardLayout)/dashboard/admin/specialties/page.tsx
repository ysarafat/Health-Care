"use client";
import {
  useDeleteSpecialtyMutation,
  useGetSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import SpecialistModal from "./components/SpecialistModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res.id) {
        toast.success("Specialty deleted successfully");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} alt={row.title} width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <GridDeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialties</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      {!isLoading ? (
        <Box sx={{ mt: 2 }}>
          <DataGrid rows={data} columns={columns} hideFooter />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;

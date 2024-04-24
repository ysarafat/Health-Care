"use client";
import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { UserLogin } from "@/services/actions/UserLogin";
import { registerPatient } from "@/services/actions/registerPatient";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  password: string;
  patient: {
    name: string;
    email: string;
    contactNumber: string;
    address: string;
  };
};
const Register = () => {
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res.message);
        const result = await UserLogin({
          password: values?.password,
          email: values.patient.email,
        });

        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ marginTop: "4px" }}
              >
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm onSubmit={handleRegister}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput name="patient.name" label="Full Name" />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="patient.email" label="Email" />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="password" label="Password" />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="patient.contactNumber" label="Phone Number" />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="patient.address" label="Address" />
                </Grid>
              </Grid>
              <Button fullWidth={true} sx={{ margin: "15px 0" }} type="submit">
                Register
              </Button>
            </PHForm>
            <Typography
              component="p"
              fontWeight={300}
              sx={{ marginTop: "4px" }}
            >
              Do you have an account?{" "}
              <Link
                href={"/login"}
                style={{ color: "#1586FD" }}
                className="hover:underline transition-all duration-300"
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;

"use client";
import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { UserLogin } from "@/services/actions/UserLogin";
import { registerPatient } from "@/services/actions/registerPatient";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
// zod validation schema
export const validationSchema = z.object({
  password: z.string().min(6, "Please enter must at least 6 characters!"),
  patient: z.object({
    name: z.string().min(1, "Please enter your name!"),
    email: z.string().email("Please enter a valid email!"),
    contactNumber: z
      .string()
      .regex(/^\d{11}$/, "Please enter a valid phone number!"),
    address: z.string().min(1, "Please enter your address!"),
  }),
});

// default values
const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};
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
  const [error, setError] = useState<string>("");
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
          router.push("/dashboard");
        }
      } else {
        setError(res.message);
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
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "5px",
                  color: "white",
                  marginTop: "8px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput
                    name="patient.name"
                    label="Full Name"
                    placeholder="Yeasir Arafat"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.email"
                    label="Email"
                    placeholder="example@gmail.com"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    placeholder="*****"
                    type="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.contactNumber"
                    label="Phone Number"
                    placeholder="01710500000"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.address"
                    label="Address"
                    placeholder="Rangpur"
                  />
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

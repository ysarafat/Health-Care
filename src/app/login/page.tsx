"use client";
import assets from "@/assets";
import { UserLogin } from "@/services/actions/UserLogin";
import { storeUserInfo } from "@/services/auth.services";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
export type TLoginInputs = {
  email: string;
  password: string;
};
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLoginInputs>();

  const onSubmit: SubmitHandler<TLoginInputs> = async (values) => {
    try {
      const res = await UserLogin(values);
      console.log(res);
      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo(res?.data?.accessToken);
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
            margin: "0 auto",
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
                Health Care Login
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email", { required: true })}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password", { required: true })}
                  />
                </Grid>
              </Grid>
              <Typography
                textAlign="end"
                component="p"
                fontWeight={300}
                sx={{ marginTop: "4px" }}
              >
                Forgot Password?
              </Typography>
              <Button fullWidth={true} sx={{ margin: "15px 0" }} type="submit">
                Login
              </Button>
            </form>
            <Typography
              component="p"
              fontWeight={300}
              sx={{ marginTop: "4px" }}
            >
              Don&apos;t have an account?{" "}
              <Link
                href={"/register"}
                style={{ color: "#1586FD" }}
                className="hover:underline transition-all duration-300"
              >
                Create an account
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;

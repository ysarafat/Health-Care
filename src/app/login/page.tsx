"use client";
import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { UserLogin } from "@/services/actions/UserLogin";
import { storeUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await UserLogin(values);

      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
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
            <PHForm onSubmit={handleLogin}>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PHInput name="email" label="Email" />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="password" label="Password" />
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
            </PHForm>
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

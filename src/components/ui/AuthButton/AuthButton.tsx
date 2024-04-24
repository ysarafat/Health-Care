import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;

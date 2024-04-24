import { authKey } from "@/constants/authkey";
import { setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = (token: string) => {
  console.log(token);
  return setToLocalStorage(authKey, token);
};

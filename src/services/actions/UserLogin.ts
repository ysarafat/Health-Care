"use server";

import { TLoginInputs } from "@/app/login/page";

export const UserLogin = async (credential: TLoginInputs) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
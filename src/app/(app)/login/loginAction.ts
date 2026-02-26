"use server";

export type LoginState = {
  error: string;
  redirectTo?: string;
};

import { BASE_API_URL } from "@/constants/services";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const result = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) {
    return { error: "invalid login or password", redirectTo: undefined };
  }

  const cookiesStore = await cookies();
  const setCookieHeaders = result.headers.getSetCookie();

  if (setCookieHeaders) {
    const parsed = parseSetCookie(setCookieHeaders);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};

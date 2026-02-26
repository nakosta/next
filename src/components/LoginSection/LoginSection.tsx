"use client";

import { UserContext } from "@/providers/UserProvider";
import { use } from "react";
import { Link } from "../Link/Link";
import { LogoutButton } from "../LogoutButton/LogoutButton";

export const LoginSection = () => {
  const user = use(UserContext);

  return user ? (
    <>
      <div style={{ color: "#1677ff" }}>Привет, {user.login}!</div>
      <LogoutButton />
    </>
  ) : (
    <Link style={{ color: "#ff496c" }} href="/login">
      Войти
    </Link>
  );
};

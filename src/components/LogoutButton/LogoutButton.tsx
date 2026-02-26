"use client";

import { BASE_API_URL } from "@/constants/services";
import { UserContext } from "@/providers/UserProvider";
import { use, useTransition } from "react";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign("/");
};

export const LogoutButton = () => {
  const user = use(UserContext);

  const [isPending, startTransition] = useTransition();

  if (!user) {
    return null;
  }

  return (
    <button onClick={() => startTransition(handleLogout)} disabled={isPending}>
      Выйти
    </button>
  );
};

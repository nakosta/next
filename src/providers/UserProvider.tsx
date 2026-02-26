"use client";

import { IUser } from "@/types/user";
import { createContext, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  user: IUser | undefined;
}

export const UserContext = createContext<IUser | undefined>(undefined);

export const UserProvider = ({ children, user }: Props) => {
  return <UserContext value={user}>{children}</UserContext>;
};

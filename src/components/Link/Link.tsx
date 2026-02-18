"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import s from "./Link.module.css";

type Props = ComponentProps<typeof NextLink>;

export const Link = ({ children, ...props }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <NextLink className={`${s.link} ${isActive ? s.active : ""}`} {...props}>
      {children}
    </NextLink>
  );
};

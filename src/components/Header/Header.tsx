"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Header.module.css";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <div />
      <div className={s.logo}>TENNIS RACKET STORE</div>
      <nav className={s.nav}>
        <Link
          href="/"
          className={`${s.link} ${pathname === "/" ? s.active : ""}`}
        >
          Главная
        </Link>
        <Link
          href="/rackets"
          className={`${s.link} ${pathname === "/rackets" ? s.active : ""}`}
        >
          Ракетки
        </Link>
      </nav>
    </header>
  );
};

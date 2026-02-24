import { Link } from "../Link/Link";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div />
      <div className={s.logo}>TENNIS RACKET STORE</div>
      <nav className={s.nav}>
        <Link href="/">Главная</Link>
        <Link href="/rackets">Ракетки</Link>
        <Link href="/rackets/top10">ТОП-10</Link>
      </nav>
    </header>
  );
};

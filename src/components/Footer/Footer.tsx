import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div>TENNIS RACKET STORE</div>
        <div>© {new Date().getFullYear()} Все права защищены</div>
      </div>
    </footer>
  );
};

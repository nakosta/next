import { IRacket } from "@/types/racket";
import Link from "next/link";
import { RacketItem } from "../RacketItem/RacketItem";
import s from "./Rackets.module.css";

type Props = {
  rackets: IRacket[];
  title?: string;
  showAllLink?: boolean;
  variant?: "grid" | "carousel";
};

export const Rackets = ({
  rackets,
  title = "Ракетки",
  showAllLink,
  variant = "grid",
}: Props) => {
  return (
    <section className={s.wrapper}>
      <div className={s.header}>
        <h2 className={s.title}>{title}</h2>
        {showAllLink && (
          <Link href="/rackets" className={s.allLink}>
            Все →
          </Link>
        )}
      </div>
      <div className={variant === "grid" ? s.grid : s.carousel}>
        {rackets.map((racket) => (
          <RacketItem key={racket.id} racket={racket} />
        ))}
      </div>
    </section>
  );
};

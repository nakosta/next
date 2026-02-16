import { rackets } from "@/data/rackets";
import Image from "next/image";
import Link from "next/link";
import s from "./Rackets.module.css";

type Props = {
  limit?: number;
  showAllLink?: boolean;
};

export const Rackets = ({ limit, showAllLink }: Props) => {
  const displayedRackets = limit ? rackets.slice(0, limit) : rackets;

  return (
    <section className={s.wrapper}>
      <div className={s.header}>
        <h2 className={s.title}>Ракетки</h2>

        {showAllLink && (
          <Link href="/rackets" className={s.allLink}>
            Все →
          </Link>
        )}
      </div>

      <div className={s.grid}>
        {displayedRackets.map((racket) => (
          <Link
            key={racket.id}
            href={`/rackets/${racket.id}`}
            className={s.card}
          >
            <div className={s.imageWrapper}>
              <Image
                src={racket.imageUrl}
                alt={racket.name}
                fill
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>

            <div className={s.name}>{racket.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

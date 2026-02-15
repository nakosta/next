import { rackets } from "@/data/rackets";
import Image from "next/image";
import Link from "next/link";
import styles from "./Rackets.module.css";

type Props = {
  limit?: number;
  showAllLink?: boolean;
};

export const Rackets = ({ limit, showAllLink }: Props) => {
  const displayedRackets = limit ? rackets.slice(0, limit) : rackets;

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Ракетки</h2>

        {showAllLink && (
          <Link href="/rackets" className={styles.allLink}>
            Все
          </Link>
        )}
      </div>

      <div className={styles.grid}>
        {displayedRackets.map((racket) => (
          <Link
            key={racket.id}
            href={`/rackets/${racket.id}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={racket.imageUrl}
                alt={racket.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>

            <div className={styles.name}>{racket.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

import { IRacket } from "@/types/racket";
import Image from "next/image";
import Link from "next/link";
import s from "./RacketItem.module.css";

type Props = {
  racket: IRacket;
};

export const RacketItem = ({ racket }: Props) => {
  return (
    <Link href={`/racket/${racket.id}`} className={s.card}>
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
  );
};

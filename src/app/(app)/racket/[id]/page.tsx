import { getMetaRacketById } from "@/services/getMetaRacketById";
import { getRacketById } from "@/services/getRacketById";
import Image from "next/image";
import { notFound } from "next/navigation";
import s from "./RacketPage.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, isError } = await getMetaRacketById({ id });

  if (isError || !data) {
    return {
      title: "Tennis racket store",
      description: "Tennis next js app",
    };
  }

  const {
    name,
    brand: { name: brandName },
  } = data;

  return {
    title: `${name} - ${brandName}`,
    description: `${name} - ${brandName}`,
  };
}

const RacketPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { isError, data: racket } = await getRacketById(id);

  if (isError) {
    return "Some error";
  }

  if (!racket) {
    notFound();
  }

  return (
    <div className={s.card}>
      <div className={s.imageSection}>
        {racket.top10 && <div className={s.badge}>TOP 10</div>}

        <div className={s.imageWrapper}>
          <Image
            src={racket.imageUrl}
            alt={racket.name}
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      </div>

      <div className={s.infoSection}>
        <div className={s.brand}>{racket.brand.name}</div>

        <h1 className={s.title}>{racket.name}</h1>

        <div className={s.price}>${racket.price}</div>

        <div className={s.meta}>
          <div>
            <span>Модель:</span> {racket.model}
          </div>
          <div>
            <span>Год:</span> {racket.year}
          </div>
          <div>
            <span>Тип:</span> {racket.type}
          </div>
        </div>

        <p className={s.description}>{racket.description}</p>

        <button className={s.button}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default RacketPage;

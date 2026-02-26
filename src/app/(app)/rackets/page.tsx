import { Rackets } from "@/components/Rackets/Rackets";
import { getRackets } from "@/services/getRackets";
import { notFound } from "next/navigation";
import s from "./RacketsPage.module.css";

const RacketsPage = async () => {
  const { isError, data } = await getRackets({ limit: 20 });

  if (isError) {
    return "Some error";
  }

  if (!data) {
    notFound();
  }

  return (
    <div className={s.layout}>
      <aside className={s.sidebar}>Фильтры (будут здесь)</aside>
      <div className={s.content}>
        <Rackets variant="grid" rackets={data} />
      </div>
    </div>
  );
};

export default RacketsPage;

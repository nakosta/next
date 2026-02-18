import { Rackets } from "@/components/Rackets/Rackets";
import { getRackets } from "@/services/getRackets";
import s from "./RacketsPage.module.css";

const RacketsPage = async () => {
  const { isError, data } = await getRackets({ limit: 20 });

  if (isError) {
    return "isError";
  }

  if (!data) {
    return "not found";
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

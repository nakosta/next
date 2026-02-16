import { Rackets } from "@/components/Rackets/Rackets";
import s from "./RacketsPage.module.css";

const RacketsPage = () => {
  return (
    <div className={s.layout}>
      <aside className={s.sidebar}>Фильтры (будут здесь)</aside>

      <div className={s.content}>
        <Rackets />
      </div>
    </div>
  );
};

export default RacketsPage;

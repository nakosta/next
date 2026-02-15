import { Rackets } from "@/components/Rackets/Rackets";
import styles from "./RacketsPage.module.css";

const RacketsPage = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>Фильтры (будут здесь)</aside>

      <div className={styles.content}>
        <Rackets />
      </div>
    </div>
  );
};

export default RacketsPage;

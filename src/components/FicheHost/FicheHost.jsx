import FicheRating from "../FicheRating/FicheRating";
import styles from "./FicheHost.module.scss";

export default function FicheHost() {
  return (
    <div className={styles.ficheHost}>
      <div className={styles.ficheHost__host}>
        <div className={styles.ficheHost__host__name}>Alexandre Dumas</div>
        <div className={styles.ficheHost__host__img}></div>
      </div>
      <FicheRating note={4} />
    </div>
  );
}

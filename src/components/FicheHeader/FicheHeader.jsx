import styles from "./FicheHeader.module.scss";

export default function FicheHeader() {
  return (
    <div className={styles.ficheHeader}>
      <h1 className={styles.ficheHeader__title}>
        Cozy loft on the Cana Saint-Martin
      </h1>
      <h2 className={styles.ficheHeader__subtitle}>Paris, Ile-de-France</h2>
      <div className={styles.ficheHeader__tags}>
        <span className={styles.ficheHeader__tags__item}>Cozy</span>
        <span className={styles.ficheHeader__tags__item}>Canal</span>
        <span className={styles.ficheHeader__tags__item}>Paris 10</span>
      </div>
    </div>
  );
}

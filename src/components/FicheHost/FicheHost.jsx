import FicheRating from "../FicheRating/FicheRating";
import styles from "./FicheHost.module.scss";

export default function FicheHost({ host, rating }) {
  return (
    <div className={styles.ficheHost}>
      <div className={styles.ficheHost__host}>
        <div className={styles.ficheHost__host__name}>{host.name}</div>
        <img
          className={styles.ficheHost__host__img}
          src={host.picture}
          alt="Photo hebergeur"
        />
      </div>
      <FicheRating note={parseInt(rating)} />
    </div>
  );
}

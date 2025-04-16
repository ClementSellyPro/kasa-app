import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>Titre de la location</h2>
    </div>
  );
}

import styles from "./Card.module.scss";

export default function Card({ title, cover }) {
  return (
    <div className={styles.card} style={{ background: cover }}>
      <img className={styles.card__cover} src={cover} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
    </div>
  );
}

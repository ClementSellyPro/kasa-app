import styles from "./FicheHeader.module.scss";

export default function FicheHeader({ title, location, tags }) {
  return (
    <div className={styles.ficheHeader}>
      <h1 className={styles.ficheHeader__title}>{title}</h1>
      <h2 className={styles.ficheHeader__location}>{location}</h2>
      <div className={styles.ficheHeader__tags}>
        {tags.map((item, index) => {
          return (
            <span key={index} className={styles.ficheHeader__tags__item}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

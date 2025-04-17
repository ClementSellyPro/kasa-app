import styles from "./Banner.module.scss";

export default function Banner({ imgURL, imgAlt, children }) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <img
          className={styles.banner__container__image}
          src={imgURL}
          alt={imgAlt}
        />
        {children}
      </div>
    </div>
  );
}

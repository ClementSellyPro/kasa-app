import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <img
          className={styles.banner__container__image}
          src={"/assets/images/home-image.png"}
          alt={"Bord de mer"}
        />
        <h1 className={styles.banner__container__title}>
          <span>Chez vous,</span> <span>partout et ailleurs</span>
        </h1>
      </div>
    </div>
  );
}

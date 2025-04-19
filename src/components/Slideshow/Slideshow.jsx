import styles from "./Slideshow.module.scss";

export default function FicheBanner() {
  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__img}>
        <img
          className={styles.slideshow__img__arrowLeft}
          src="/assets/icon/arrow-left.svg"
        />
        <img
          className={styles.slideshow__img__arrowRight}
          src="/assets/icon/arrow-right.svg"
        />
        <p className={styles.slideshow__img__index}>1/4</p>
      </div>
    </div>
  );
}

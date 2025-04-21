import { useState } from "react";
import styles from "./Slideshow.module.scss";

export default function FicheBanner({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  function onRightClick() {
    let newIndex = currentPicture + 1;
    if (newIndex >= pictures.length) {
      newIndex = 0;
    }
    setCurrentPicture(newIndex);
  }

  function onLeftClick() {
    let newIndex = currentPicture - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    setCurrentPicture(newIndex);
  }

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__container}>
        <img
          className={styles.slideshow__container__img}
          src={pictures[currentPicture]}
          alt="Photo hébergement"
        />
        {pictures.length > 1 && (
          <>
            <img
              onClick={onLeftClick}
              className={styles.slideshow__container__arrowLeft}
              src="/assets/icon/arrow-left.svg"
            />
            <img
              onClick={onRightClick}
              className={styles.slideshow__container__arrowRight}
              src="/assets/icon/arrow-right.svg"
            />
            <p className={styles.slideshow__container__index}>
              {currentPicture + 1}/{pictures.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

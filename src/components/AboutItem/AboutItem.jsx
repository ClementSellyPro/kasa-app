import { useState } from "react";
import styles from "./AboutItem.module.scss";

export default function AboutItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    const target = e.target;

    if (isOpen) {
      target.style.transform = "rotate(0deg)";
    } else {
      target.style.transform = "rotate(-180deg)";
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.aboutItem}>
      <div className={styles.aboutItem__header}>
        <h2 className={styles.aboutItem__header__title}>{title}</h2>
        <img
          className={styles.aboutItem__header__icon}
          src="/assets/icon/arrow.svg"
          alt="Fleche"
          onClick={(e) => handleClick(e)}
        />
      </div>
      {isOpen ?? <p className={styles.aboutItem__text_open}>{text}</p>}
    </div>
  );
}

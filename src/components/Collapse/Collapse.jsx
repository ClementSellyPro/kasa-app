import { useState } from "react";
import styles from "./Collapse.module.scss";

export default function Collapse({ title, text }) {
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
    <div className={styles.collapse}>
      <div className={styles.collapse__header}>
        <h2 className={styles.collapse__header__title}>{title}</h2>
        <img
          className={styles.collapse__header__icon}
          src="/assets/icon/arrow.svg"
          alt="Fleche"
          onClick={(e) => handleClick(e)}
        />
      </div>
      {isOpen && <p className={styles.collapse__text}>{text}</p>}
    </div>
  );
}

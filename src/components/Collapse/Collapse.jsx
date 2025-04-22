import { useState } from "react";
import styles from "./Collapse.module.scss";

export default function Collapse({ title, text, equipements }) {
  const [isOpen, setIsOpen] = useState(false);
  let textDisplay = "";
  if (equipements) {
    textDisplay = (
      <ul className={isOpen ? styles.collapse__content__open : styles.collapse__content}>
        {equipements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    textDisplay = <p className={isOpen ? styles.collapse__content__open : styles.collapse__content}>{text}</p>;
  }

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
      {textDisplay}
    </div>
  );
}

import AboutItem from "../AboutItem/AboutItem";
import styles from "./AboutItemList.module.scss";

export default function AboutItemList() {
  return (
    <div className={styles.aboutItemList}>
      <AboutItem />
      <AboutItem />
      <AboutItem />
      <AboutItem />
    </div>
  );
}

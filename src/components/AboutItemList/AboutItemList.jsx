import { useEffect, useState } from "react";
import AboutItem from "../AboutItem/AboutItem";
import styles from "./AboutItemList.module.scss";

export default function AboutItemList() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch("/aboutItems.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data));
  }, []);
  return (
    <div className={styles.aboutItemList}>
      {aboutData.map((item) => (
        <AboutItem title={item.title} text={item.text} />
      ))}
    </div>
  );
}

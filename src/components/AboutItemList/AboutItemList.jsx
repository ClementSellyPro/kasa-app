import { useEffect, useState } from "react";
import styles from "./AboutItemList.module.scss";
import Collapse from "../Collapse/Collapse";

export default function AboutItemList() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch("/aboutItems.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data));
  }, []);
  return (
    <div className={styles.aboutItemList}>
      {aboutData.map((item, index) => (
        <Collapse key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

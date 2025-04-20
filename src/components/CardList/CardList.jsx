import { Link } from "react-router";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";
import { useState, useEffect } from "react";

export default function CardList() {
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setLogementData(data));
  }, []);

  return (
    <div className={styles.cardList}>
      <section className={styles.cardList__container}>
        {logementData.map((item) => {
          return (
            <Link to={`/fiche/${item.id}`} key={item.id}>
              <Card title={item.title} cover={item.cover} />
            </Link>
          );
        })}
      </section>
    </div>
  );
}

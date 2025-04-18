import { Link } from "react-router";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

export default function CardList() {
  return (
    <div className={styles.cardList}>
      <section className={styles.cardList__container}>
        <Card />
        <Card />
        <Link to={"/fiche"}>
          <Card />
        </Link>
        <Card />
      </section>
    </div>
  );
}

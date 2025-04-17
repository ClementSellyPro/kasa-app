import Banner from "../components/Banner/Banner";
import CardList from "../components/CardList/CardList";
import styles from "../components/Banner/Banner.module.scss";

export default function Home() {
  return (
    <>
      <Banner imgURL={"/assets/images/home-image.png"} imgAlt={"Bord de mer"}>
        {
          <h1 className={styles.banner__container__title}>
            <span>Chez vous,</span> <span>partout et ailleurs</span>
          </h1>
        }
      </Banner>
      <CardList />
    </>
  );
}

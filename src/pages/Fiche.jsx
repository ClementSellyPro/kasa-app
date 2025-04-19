import Collapse from "../components/Collapse/Collapse";
import FicheHeader from "../components/FicheHeader/FicheHeader";
import FicheHost from "../components/FicheHost/FicheHost";
import Slideshow from "../components/Slideshow/Slideshow";
import styles from "./Fiche.module.scss";

export default function Fiche() {
  return (
    <>
      <Slideshow />
      <div className={styles.fiche__header}>
        <FicheHeader />
        <FicheHost />
      </div>
      <div className={styles.fiche__description}>
        <Collapse
          title="Description"
          text="Je suis une description de l'hebergement"
        />
        <Collapse
          title="Equipement"
          text="Je suis une description de l'equipement de l'hebergement"
        />
      </div>
    </>
  );
}

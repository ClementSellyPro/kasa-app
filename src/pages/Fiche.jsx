import { useNavigate, useParams } from "react-router";
import Collapse from "../components/Collapse/Collapse";
import FicheHeader from "../components/FicheHeader/FicheHeader";
import FicheHost from "../components/FicheHost/FicheHost";
import Slideshow from "../components/Slideshow/Slideshow";
import styles from "./Fiche.module.scss";
import { useEffect, useState } from "react";
import useLogement from '../context/useLogement';

export default function Fiche() {
  const { id } = useParams();
  const [currentLogement, setCurrentLogement] = useState(null);
  const { logementData } = useLogement();
  const [pictures, setPictures] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const logement = logementData.find((item) => item.id === id);
    if (!logement) {
      navigate("/404");
    } else {
      setCurrentLogement(logement);
      setPictures(logement.pictures);
    }
    //eslint-disable-next-line
  }, [id, navigate]);

  if (!currentLogement) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <>
      <Slideshow pictures={pictures} />
      <div className={styles.fiche__header}>
        <FicheHeader
          title={currentLogement.title}
          location={currentLogement.location}
          tags={currentLogement.tags}
        />
        <FicheHost host={currentLogement.host} rating={currentLogement.rating} />
      </div>
      <div className={styles.fiche__description}>
        <Collapse title="Description" text={currentLogement.description} />
        <Collapse title="Equipement" equipements={currentLogement.equipments} />
      </div>
    </>
  );
}

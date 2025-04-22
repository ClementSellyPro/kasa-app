import { useNavigate, useParams } from "react-router";
import Collapse from "../components/Collapse/Collapse";
import FicheHeader from "../components/FicheHeader/FicheHeader";
import FicheHost from "../components/FicheHost/FicheHost";
import Slideshow from "../components/Slideshow/Slideshow";
import styles from "./Fiche.module.scss";
import { useEffect, useState } from "react";

export default function Fiche() {
  const { id } = useParams();
  const [logementData, setLogementData] = useState(null);
  const [pictures, setPictures] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const currentLogement = data.find((item) => item.id === id);
        if (!currentLogement) {
          navigate("/404");
        } else {
          setLogementData(currentLogement);
          setPictures(currentLogement.pictures);
        }
      });
  }, [id, navigate]);

  if (!logementData) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <>
      <Slideshow pictures={pictures} />
      <div className={styles.fiche__header}>
        <FicheHeader
          title={logementData.title}
          location={logementData.location}
          tags={logementData.tags}
        />
        <FicheHost host={logementData.host} rating={logementData.rating} />
      </div>
      <div className={styles.fiche__description}>
        <Collapse title="Description" text={logementData.description} />
        <Collapse title="Equipement" equipements={logementData.equipments} />
      </div>
    </>
  );
}

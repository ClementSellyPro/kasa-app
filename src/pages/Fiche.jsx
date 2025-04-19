import FicheHeader from "../components/FicheHeader/FicheHeader";
import FicheHost from "../components/FicheHost/FicheHost";
import Slideshow from "../components/Slideshow/Slideshow";

export default function Fiche() {
  return (
    <>
      <Slideshow />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FicheHeader />
        <FicheHost />
      </div>
    </>
  );
}

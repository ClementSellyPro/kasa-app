import AboutItemList from "../components/AboutItemList/AboutItemList";
import Banner from "../components/Banner/Banner";

export default function About() {
  return (
    <>
      <Banner imgURL={"/assets/images/about-image.png"} imgAlt={"Montagne"} />
      <AboutItemList />
    </>
  );
}

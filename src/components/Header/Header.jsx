import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import logo from "/assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Kasa" />
      <NavBar />
    </header>
  );
}

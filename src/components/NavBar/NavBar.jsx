import { Link } from "react-router";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__links__link}>
          <Link to={"/"} className={styles.navbar__links__link_item}>
            Accueil
          </Link>
        </li>
        <li className={styles.navbar__links__link}>
          <Link to={"/about"} className={styles.navbar__links__link_item}>
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

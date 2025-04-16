import { Link } from "react-router";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.notfound__title}>404</h1>
      <p className={styles.notfound__text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"} className={styles.notfound__link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

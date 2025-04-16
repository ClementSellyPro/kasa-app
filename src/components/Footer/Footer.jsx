import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src="/assets/logo-white.svg" />
      <p className={styles.footer__text}>
        &copy; 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

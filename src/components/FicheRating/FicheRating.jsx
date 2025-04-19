import styles from "./FicheRating.module.scss";

export default function FicheRating({ note }) {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < note) {
      stars.push(<img src="/assets/icon/star-active.svg" alt="Etoile note" />);
    } else {
      stars.push(
        <img src="/assets/icon/star-inactive.svg" alt="Etoile note" />
      );
    }
  }

  return <div className={styles.ficheRating}>{stars}</div>;
}

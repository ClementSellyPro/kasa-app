import styles from "./FicheRating.module.scss";

export default function FicheRating({ note }) {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        className={styles.ratingStars}
        key={i}
        src={`/assets/icon/star-${ i < note ? 'active' : 'inactive' }.svg`}
        alt="Etoile note"
      />
    );
  }

  return <div>{stars}</div>;
}

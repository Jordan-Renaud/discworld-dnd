import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function DefaultCharacterCard({ character }) {
  return (
    <div className={styles.simpleCard}>
      <h2>{character.name}</h2>
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <Image
            src={character.image}
            width="300"
            height="300"
            alt={character.imageAlt}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
        <div className={styles.quoteContainer}>
          <q>{character.quote}</q>
        </div>
      </div>
      <p className={styles.text}>{character.description}</p>
    </div>
  );
}

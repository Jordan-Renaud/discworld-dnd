import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function CharacterClassCard({ character }) {
  return (
    <div className={styles.simpleCard}>
      <h2>{character.name}</h2>
      <p>{character.startingPoints} points</p>
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
      <h3>Pros:</h3>
      {character.pros.map((pro, index) => (
        <p key={index}>{pro}</p>
      ))}
      <h3>Cons:</h3>
      {character.cons.map((con, index) => (
        <p key={index}>{con}</p>
      ))}
      <p className={styles.text}>{character.description}</p>
    </div>
  );
}

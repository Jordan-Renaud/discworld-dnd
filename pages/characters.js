import Head from "next/head";
import styles from "../styles/Home.module.css";
import DefaultCharacterCard from "../components/DefaultCharacterCard";
import CharacterClassCard from "../components/CharacterClassCard";
import { defaultCharacters, characterClasses } from "../data/defaultCharacters";

export default function Characters() {
  return (
    <div>
      <Head>
        <title>Characters</title>
        <meta name="description" content="Characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Characters</h1>
        <h2>Known Characters</h2>
        <div className={styles.grid}>
          {defaultCharacters.map((character) => (
            <DefaultCharacterCard character={character} key={character.name} />
          ))}
        </div>
        <h2>Characters Classes</h2>
        <div className={styles.grid}>
          {characterClasses.map((characterClass) => (
            <CharacterClassCard
              character={characterClass}
              key={characterClass.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

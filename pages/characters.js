import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { defaultCharacters } from "../data/defaultCharacters";

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
        <div className={styles.grid}>
          {defaultCharacters.map((character) => {
            return (
              <div className={styles.simpleCard} key={character.name}>
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
          })}
        </div>
      </main>
    </div>
  );
}

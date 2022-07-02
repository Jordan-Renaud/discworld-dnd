import Head from "next/head";
import { useState } from "react";
import BackstoryQuestionaire from "../components/BackstoryQuestionaire";
import styles from "../styles/Home.module.css";

export default function Character() {
  const [characterExists, setCharacterExists] = useState(false);
  const [backstoryExists, setBackstoryExists] = useState(false);
  const [questionaireShown, setQuestionaireShown] = useState(false);
  const character = "Apollo";

  return (
    <div>
      <Head>
        <title>Character</title>
        <meta name="description" content="Character" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Character</h1>
        <div className={styles.grid}>
          {characterExists ? null : (
            <button className={styles.card}>Create New Character</button>
          )}
          {backstoryExists ? null : (
            <button
              className={styles.card}
              onClick={() =>
                questionaireShown
                  ? setQuestionaireShown(false)
                  : setQuestionaireShown(true)
              }
            >
              Create New Backstory
            </button>
          )}
        </div>
        {questionaireShown ? (
          <BackstoryQuestionaire character={character} />
        ) : null}
      </div>
    </div>
  );
}

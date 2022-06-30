import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function History() {
  return (
    <div>
      <Head>
        <title>Discworld History</title>
        <meta name="description" content="History" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Brief History of Discworld</h1>
      </main>
    </div>
  );
}

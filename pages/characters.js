import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import librarian from "../public/librarian.webp";
import death from "../public/death.jpeg";

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
          <div className={styles.simpleCard}>
            <h2>Death</h2>
            <q>
              What is there in this world that truly makes living worthwhile?
              <br />
              Death thought about it. "CATS" he said eventually. "CATS ARE
              NICE."
            </q>
            <Image
              src={death}
              width="716"
              height="1077"
              alt="Death playing the guitar."
            />
            <p>
              Death is not invisible. Most people just refuse to acknowledge him
              for who he is, unless he insists. Under normal circumstances, only
              those of a magical disposition, children and cats can see him, or
              allow themselves to see him.
            </p>
          </div>
          <div className={styles.simpleCard}>
            <h2>The Librarian</h2>
            <q>ook</q>
            <Image
              src={librarian}
              width="308"
              height="365"
              alt="A orang-utan reading a book."
            />
            <p>
              The Librarian is known for his violent reaction whenever he hears
              anyone refer to him as a "monkey" (orang-utans are apes). He
              speaks an elaborate language whose vocabulary consists of the
              single word Ook (and its antonym "eek" - where "ook" means yes,
              "eek" tends to mean no). Nonetheless, most people seem to be able
              to understand him.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

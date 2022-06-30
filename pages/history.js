import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import turtle from "../public/turtle.webp";

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
        <Image
          src={turtle}
          width="960"
          height="540"
          alt="A turtle with four elephants on its back, with a flat landmass on the backs of the elephants."
        />
        <q>It's turtles all the way down, mate</q>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Great A'Tuin the turtle comes, swimming slowly through the
            interstellar gulf, hydrogen frost on his ponderous limbs, his huge
            and ancient shell pocked with meteor craters. Through sea-sized eyes
            that are crusted with rheum and asteroid dust. He stares fixedly at
            the Destination. In a brain bigger than a city, with geological
            slowness, He thinks only of the Weight. Most of the weight is of
            course accounted for by Berilia, Tubul, Great T'Phon and Jerakeen,
            the four giant elephants upon whose broad and star-tanned shoulders
            the disc of the World rests, garlanded by the long waterfall at its
            vast circumference and domed by the baby-blue vault of Heaven.
          </p>
        </div>
      </main>
    </div>
  );
}

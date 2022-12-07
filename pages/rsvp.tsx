import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function RSVP() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DaveAndJerri.ca</title>
        <meta name="description" content="Dave and Jerri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          RSVP
        </h1>
        <p className={styles.description}>
          More details coming soon...
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://daverichardson.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love by{' '}Dave
        </a>
      </footer>
    </div>
  )
}
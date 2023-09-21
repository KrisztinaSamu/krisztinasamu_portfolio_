import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samu Krisztina</title>
        <meta name="keywords" content="frontend, webfejlesztő" />
      </Head>
      <main>
        <p className={styles.description}>Index.js</p>
      </main>
    </div>
  );
}

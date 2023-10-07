import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import "./Navbar.module.css";


export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samu Krisztina</title>
        <meta name="keywords" content="frontend, webfejlesztő" />
      </Head>
      <Navbar />
      <main className={styles.container}>{children}</main>
    </div>
  );
}

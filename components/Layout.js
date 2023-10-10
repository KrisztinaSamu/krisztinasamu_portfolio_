import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import "../styles/Navbar.module.css";
import Main from "./Main";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samu Krisztina</title>
        <meta name="keywords" content="frontend, webfejlesztő" />
      </Head>
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
}

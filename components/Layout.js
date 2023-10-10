import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import "../styles/Navbar.module.css";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Samu Krisztina</title>
        <meta name="keywords" content="frontend, webfejlesztő" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
}

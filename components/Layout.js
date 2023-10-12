import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import "../styles/Navbar.module.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

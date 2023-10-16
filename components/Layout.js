import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import "../styles/Navbar.module.css";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

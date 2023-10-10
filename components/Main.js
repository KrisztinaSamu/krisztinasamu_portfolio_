import styles from "../styles/Layout.module.css";
import "../styles/Navbar.module.css";

export default function Main({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.section}>{children}</div>
    </main>
  );
}

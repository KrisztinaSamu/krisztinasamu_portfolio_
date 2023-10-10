import styles from "../styles/Layout.module.css";

export default function Main({ children }) {
  return (
    <main className={styles.sectionMain}>
      <div className={styles.section}>{children}</div>
    </main>
  );
}

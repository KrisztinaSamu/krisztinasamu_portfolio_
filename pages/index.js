import styles from "../styles/Layout.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <p className={styles.description}>Index.js</p>
    </Layout>
  );
}

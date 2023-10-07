import Link from "next/link";
import Layout from "../components/Layout.js"
import styles from "../styles/Layout.module.css";

export default function AboutPost() {
  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

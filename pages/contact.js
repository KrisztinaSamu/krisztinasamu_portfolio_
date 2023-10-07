import Link from "next/link";
import Layout from "../components/Layout.js"

export default function ContactPage() {
  return (
    <Layout>
      <h1>Contact</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

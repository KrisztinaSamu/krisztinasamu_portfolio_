import Link from "next/link";
import Layout from "../components/Layout.js"

export default function SkillsPage() {
  return (
    <Layout>
      <h1> Skills</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

import Link from "next/link";
import Layout from "../components/Layout.js"

export default function PortfolioPage() {
  return (
    <Layout>
      <h1> Portfolio</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

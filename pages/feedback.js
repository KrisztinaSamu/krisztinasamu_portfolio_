import Link from "next/link";
import Layout from "../components/Layout.js"

export default function FeedbackPage() {
  return (
    <Layout>
      <h1>Feedback</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

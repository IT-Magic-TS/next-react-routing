import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page not found!</h2>
      <Link href="/">Home</Link>
    </div>
  );
}

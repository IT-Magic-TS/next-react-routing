import { useRouter } from "next/router";

export default function BlogPostPage() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
